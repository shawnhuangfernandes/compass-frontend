import React, { Component } from "react";
import PageTitle from "./PageTitle";
import { Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

class LessonContainer extends Component {
  render() {
    return (
      <div className="lesson-container">
        <PageTitle titleText="Your Lessons" />
        <div className="lesson-image-container">
          <Image src="https://mod4-project.s3.us-east-2.amazonaws.com/spell-book.png" />
        </div>
        <div className="lesson-button-container">
          <Link to={`users/${this.props.current_user.id}/prompts`}>
            <Button size="massive" basic inverted color='violet' content="Begin"/>
          </Link>
          <Link to={`users/${this.props.match.params.user_id}/curriculum`}>
          <Button size="massive" basic inverted color='violet' content="Back"/>
          </Link>
        </div>
      </div>
    );
  }
}

export default LessonContainer;
