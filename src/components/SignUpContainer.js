import React, { Component } from "react";
import PageTitle from "./PageTitle";
import SignUpForm from "./SignUpForm";
import { Image } from 'semantic-ui-react'

class SignUpContainer extends Component {
  render() {
    return (
      <div className="signup-container">
        <PageTitle titleText="SIGN UP" />
        <div className="signup-image-container">
          <Image src="https://media.giphy.com/media/13jbqcAvizxKUg/giphy.gif" />
        </div>
        <SignUpForm handleLogin={this.props.handleLogin} />
      </div>
    );
  }
}

export default SignUpContainer;
