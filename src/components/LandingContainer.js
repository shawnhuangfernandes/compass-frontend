import React, { Component } from "react";
import PageTitle from "./PageTitle";
import { Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
class LandingContainer extends Component {
  render() {
    return (
      <div className="landing-container">
        <PageTitle titleText="COMPASS" />
        <div className="landing-image-container">
          <Image
            className="landing-image"
            src="https://mod4-project.s3.us-east-2.amazonaws.com/compass.png"
          />
        </div>
        <div className="landing-button-container">
        <Link to="login">
          <Button size="massive" basic inverted color='violet' content="Login"/>
        </Link>
        </div>
      </div>
    );
  }
}

export default LandingContainer;
