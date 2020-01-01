import React, { Component } from "react";
import PageTitle from "./PageTitle";
import { Message, Embed, Form, TextArea, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

class PromptContainer extends Component {
  previousLink = `/users/${this.props.match.params.user_id}/prompts`;

  constructor(props) {
    super(props);
    this.state = {
      prompt: {},
      userInput: "",
      isComplete: false
    };
  }

  componentDidMount() {
    this.fetchPrompt();
  }

  fetchPrompt = async () => {
    const promptFetched = await fetch(
      `http://localhost:3000/users/${this.props.match.params.user_id}/prompts/${this.props.match.params.prompt_id}`
    );
    const promptObj = await promptFetched.json();

    await this.setState({
      prompt: promptObj,
      isComplete: promptObj.response ? promptObj.response.complete : false,
      userInput: promptObj.response ? promptObj.response.body : ""
    });
  };

  render() {
    return (
      <div className="prompt-container">
        <PageTitle titleText={this.state.prompt.title} />
        {this.determineMediaType()}
        <div className="prompt-button-container">
          <Button
            toggle
            active={this.state.isComplete}
            onClick={this.handleCompletionClick}
            size="massive"
            content={
              this.state.isComplete ? "Click To Update" : "Click To Save"
            }
          />
          <Link to={this.previousLink}>
            <Button
              size="massive"
              basic
              inverted
              color="violet"
              content="Go Back"
            />
          </Link>
        </div>
      </div>
    );
  }

  determineMediaType = () => {
    switch (this.state.prompt.category) {
      case "Reading":
        return (
          <Message
            className="prompt-reading"
            color="violet"
            size="massive"
            header={this.state.prompt.header}
            content={this.state.prompt.body}
          />
        );
      case "Video":
        return (
          <Embed
            className="prompt-video"
            icon="right circle arrow"
            placeholder=""
            url={this.state.prompt.body}
          />
        );
      case "Activity":
        return (
          <Form>
            <Form.Field
              className="prompt-activity"
              onChange={this.handleTextInput}
              control={TextArea}
              label={this.state.prompt.body}
              value={this.state.userInput}
            />
          </Form>
        );
      default:
      // code block
    }
  };

  handleTextInput = async e => {
    await this.setState({
      userInput: e.target.value
    });
  };

  handleCompletionClick = async e => {
    await this.setState({
      isComplete: true
    });

    const fetchResponse = await fetch(`http://localhost:3000/responses`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id: this.props.match.params.user_id,
        prompt_id: this.props.match.params.prompt_id,
        body: this.state.userInput,
        complete: this.state.isComplete
      })
    });

    console.log(await fetchResponse.json());
  };
}

export default PromptContainer;
