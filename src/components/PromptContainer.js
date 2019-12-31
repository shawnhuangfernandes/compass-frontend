import React, { Component } from "react";
import PageTitle from "./PageTitle";
import { Message, Embed, Form, TextArea, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

class PromptContainer extends Component {
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
      `http://localhost:3000/users/${this.props.current_user.id}/prompts/${this.props.match.params.prompt_id}`
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
      <div>
        <PageTitle titleText={this.state.prompt.title} />
        {this.determineMediaType()}
        <Button
          toggle
          active={this.state.isComplete}
          onClick={this.handleCompletionClick}
        >
          {this.state.isComplete ? "Click To Update" : "Click To Save"}
        </Button>
        <Link to="/prompts">
          <Button>Go Back</Button>
        </Link>
      </div>
    );
  }

  determineMediaType = () => {
    switch (this.state.prompt.category) {
      case "Reading":
        return (
          <Message
            header={this.state.prompt.header}
            content={this.state.prompt.body}
          />
        );
      case "Video":
        return (
          <Embed
            icon="right circle arrow"
            placeholder=""
            url={this.state.prompt.body}
          />
        );
      case "Activity":
        return (
          <Form>
            <Form.Field
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
        user_id: this.props.current_user.id,
        prompt_id: this.props.match.params.prompt_id,
        body: this.state.userInput,
        complete: this.state.isComplete
      })
    });

    console.log(await fetchResponse.json());
  };
}

export default PromptContainer;
