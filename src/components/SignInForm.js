import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";
import { Redirect } from "react-router-dom";

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameEntry: "",
      toCurriculum: false,
      toSignUp: false
    };
  }

  onSubmitForm = async e => {
    const fetchUser = await fetch("http://localhost:3000/find-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: `${e.target.elements[0].value}`
      })
    });
    const user = await fetchUser.json();
    if (user.message === undefined) {
      this.props.handleLogin(user);
      await this.setState({
        toCurriculum: true
      });
    } else {
      console.log(user.message);
    }
  };

  handleSignUpClick = async () => {
    await this.setState({
      toSignUp: true
    });
  };

  handleUsernameChange = e => {
    this.setState({
      usernameEntry: e.target.value
    });
  };

  render() {
    if (this.state.toSignUp === true) {
      return <Redirect to="/sign-up" />;
    } else if (this.state.toCurriculum === true) {
      return <Redirect to="/curriculum" />;
    } else {
      return (
        <div>
          <Form onSubmit={this.onSubmitForm} size="massive">
            <Form.Field>
              <label>Username</label>
              <input
                onChange={this.handleUsernameChange}
                placeholder="Please Enter A Username"
              />
            </Form.Field>
            <div className="login-button-container">
              <Button type="submit" size="massive" content="Login" basic inverted color='violet'/>
              <Button onClick={this.handleSignUpClick} size="massive" content="Sign Up" basic inverted color='violet'/>
            </div>
          </Form>
        </div>
      );
    }
  }
}

export default SignInForm;
