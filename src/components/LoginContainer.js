import React, { Component } from "react";
import PageTitle from "./PageTitle";
import SignInForm from "./SignInForm";
import { Image } from "semantic-ui-react";

class LoginContainer extends Component {
  render() {
    return (
      <div className="login-container">
        <PageTitle titleText="SIGN IN" />
        <div className="login-image-container">
          <Image src="https://mod4-project.s3.us-east-2.amazonaws.com/door.png" />
        </div>
        <SignInForm handleLogin={this.props.handleLogin} />
      </div>
    );
  }
}

export default LoginContainer;
