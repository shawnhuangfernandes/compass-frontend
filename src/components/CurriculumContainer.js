import React, { Component } from "react";
import PageTitle from "./PageTitle";
import { Image, Button } from "semantic-ui-react";
import { Redirect, Link } from "react-router-dom";

// Component that holds the curriculum data
class CurriculumContainer extends Component {
  constructor(props) {
    super(props);
    // state object that tracks whether or not to redirect to lessons or Login
    this.state = {
      toLessonSelection: false,
      toLogin: false
    };
  }

  // EVENT HANDLER: sets the "go to login" state to true
  goToLogin = async () => {
    await this.setState({
      toLogin: true
    });
  };

  // render method that decides to either Redirect or display curriculum information
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
            <Image src="https://mod4-project.s3.us-east-2.amazonaws.com/student.png" />
          </div>
          <div className="curriculum-button-container">
            <div className="curriculum-selection-card">
              <div className="curriculum-card-image-container">
                <Image src="https://mod4-project.s3.us-east-2.amazonaws.com/viking-ship.png" />
              </div>
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
              <div className="curriculum-card-image-container">
                <Image src="https://mod4-project.s3.us-east-2.amazonaws.com/lock.png" />
              </div>
              <Link to={`/users/${this.props.match.params.user_id}/settings`}>
                <Button
                  size="massive"
                  basic
                  inverted
                  color="violet"
                  content="Account Settings"
                />
              </Link>
            </div>

            <div className="curriculum-selection-card">
              <div className="curriculum-card-image-container">
                <Image src="https://mod4-project.s3.us-east-2.amazonaws.com/skull.png" />
              </div>
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
