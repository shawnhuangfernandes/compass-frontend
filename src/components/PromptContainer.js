import React, { Component } from "react";
import PageTitle from "./PageTitle";
import { Message, Embed, Form, TextArea, Button } from "semantic-ui-react";

class PromptContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prompt: {},
      userInput: "",
      isComplete: false
    };
  }

  fetchPrompt = async () => {
    const promptFetched = await fetch(
      `http://localhost:3000/users/${this.props.current_user_id}/prompts/${this.props.match.params.prompt_id}`
    );
    const promptObj = await promptFetched.json();
    console.log(promptObj);
    await this.setState({
      prompt: promptObj,
      isComplete: promptObj.response
    });
  };

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
            className
            icon="right circle arrow"
            placeholder=""
            url={this.state.prompt.body}
          />
        );
      case "Activity":
        return (
          <Form>
            <Form.Field
              control={TextArea}
              label={this.state.prompt.header}
              placeholder={this.state.prompt.body}
            />
          </Form>
        );
      default:
      // code block
    }
  };

  handleCompletionClick = async e => {
    await this.setState({
      isComplete: true
    })
  };

  componentDidMount() {
    this.fetchPrompt();
  }

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
          {this.state.isComplete ? "Complete" : "Click Here When Complete"}
        </Button>
        <Button>Go Back</Button>
      </div>
    );
  }
}

export default PromptContainer;
