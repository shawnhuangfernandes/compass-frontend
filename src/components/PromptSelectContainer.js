import React, { Component } from "react";
import PageTitle from "./PageTitle";
import PromptsTable from "./PromptsTable";
import { Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

class PromptSelectContainer extends Component {
  render() {
    return (
      <div>
        <PageTitle titleText="Your Prompts" />
        <PromptsTable current_user={this.props.current_user} />
        <Image src="https://media.giphy.com/media/28GHfhGFWpFgsQB4wR/giphy.gif" />
        <Link to="/lesson">
          <Button>Back</Button>
        </Link>
      </div>
    );
  }
}

export default PromptSelectContainer;
