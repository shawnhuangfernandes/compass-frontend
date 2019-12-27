import React, { Component } from "react";

class PromptContainer extends Component {
  render() {
    return <div>Prompt You are logged in as user #{this.props.user_id}</div>;
  }
}

export default PromptContainer;
