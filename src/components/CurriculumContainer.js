import React, { Component } from "react";
import PageTitle from "./PageTitle";
import { Image, Button } from "semantic-ui-react";
import { Redirect, Link } from "react-router-dom";

class CurriculumContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toLessonSelection: false,
      toLogin: false
    };
  }

  goToLogin = async () => {
    await this.setState({
      toLogin: true
    });
  };

  render() {
    if (this.state.toLessonSelection === true) {
      return <Redirect to="/lesson" />;
    } else if (this.state.toLogin === true) {
      return <Redirect to="/login" />;
    } else {
      return (
        <div>
          <PageTitle titleText="Your Curriculum" />
          <Image src="https://media.giphy.com/media/3htHB35GbROukV2bnR/giphy.gif" />
          <Link to="/lesson">
            <Button onClick={this.goToLessonSelection}>Explore</Button>
          </Link>
          <Button onClick={this.goToLogin}>Logout</Button>
        </div>
      );
    }
  }
}

export default CurriculumContainer;
