import React, { Component } from "react";
import PageTitle from "./PageTitle";
import { Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

class LessonContainer extends Component {
  render() {
    return (
      <div>
        <PageTitle titleText="Your Lessons" />
        <Image src="https://media.giphy.com/media/2J2XDIiYBFIu4/giphy.gif" />
        <Link to={`/prompts`}>
          <Button>Continue</Button>
        </Link>
        <Link to={`/curriculum`}>
          <Button>Back</Button>
        </Link>
      </div>
    );
  }
}

export default LessonContainer;
