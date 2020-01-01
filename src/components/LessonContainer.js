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
          <Image src="https://media.giphy.com/media/2J2XDIiYBFIu4/giphy.gif" />
        </div>
        <div className="lesson-button-container">
          <Link to={`users/${this.props.current_user.id}/prompts`}>
            <Button size="massive" basic inverted color='violet' content="Begin"/>
          </Link>
          <Link to={`/curriculum`}>
          <Button size="massive" basic inverted color='violet' content="Back"/>
          </Link>
        </div>
      </div>
    );
  }
}

export default LessonContainer;
