import React, { Component } from "react";
import PageTitle from "./PageTitle";
import AvatarImage from "./AvatarImage";
import SignInForm from "./SignInForm";

class LoginContainer extends Component {
  render() {
    return (
      <div className="login-container">
        <PageTitle titleText="SIGN IN" />
        <AvatarImage url="https://media.giphy.com/media/13jbqcAvizxKUg/giphy.gif" />
        <SignInForm />
      </div>
    );
  }
}

export default LoginContainer;
