import React, { Component } from "react";
import PageTitle from "./PageTitle";
import SignUpForm from "./SignUpForm";
import { Image } from 'semantic-ui-react'

// Container that has the sign up form in it
class SignUpContainer extends Component {
  
  // render method
  render() {
    return (
      <div className="signup-container">
        <PageTitle titleText="SIGN UP" />
        <div className="signup-image-container">
          <Image src="https://mod4-project.s3.us-east-2.amazonaws.com/crown.png" />
        </div>
        <SignUpForm handleLogin={this.props.handleLogin} />
      </div>
    );
  }
}

export default SignUpContainer;
