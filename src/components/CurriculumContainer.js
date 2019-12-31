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
        <div className="curriculum-container">
          <PageTitle titleText="Your Curriculum" />
          <div className="curriculum-image-container">
            <Image src="https://media.giphy.com/media/3htHB35GbROukV2bnR/giphy.gif" />
          </div>
          <div className="curriculum-button-container">
            <div className="curriculum-selection-card">
              <Link to="/lesson">
                <Button
                  onClick={this.goToLessonSelection}
                  size="massive"
                  basic
                  inverted
                  color="violet"
                  content="Explore"
                />
              </Link>
            </div>
            <div className="curriculum-selection-card">
            <Button
              onClick={this.goToLogin}
              size="massive"
              basic
              inverted
              color="violet"
              content="Logout"
            />
            </div>
          </div>
        </div>
      );
    }
  }
}

export default CurriculumContainer;
