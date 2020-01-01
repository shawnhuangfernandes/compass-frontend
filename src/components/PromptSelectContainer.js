import React, { Component } from "react";
import PageTitle from "./PageTitle";
import PromptsTable from "./PromptsTable";
import { Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

class PromptSelectContainer extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="prompt-selection-container">
        <PageTitle titleText="Your Prompts" />
        <div className="prompt-selection-table-container">
          <PromptsTable current_user_id={this.props.match.params.user_id} />
        </div>
        <div className="prompt-selection-image-container">
          <Image src="https://media.giphy.com/media/28GHfhGFWpFgsQB4wR/giphy.gif" />
        </div>
        <div className="prompt-selection-button-container">
          <Link to="/lesson">
          <Button size="massive" basic inverted color='violet' content="Back"/>
          </Link>
        </div>
      </div>
    );
  }
}

export default PromptSelectContainer;
