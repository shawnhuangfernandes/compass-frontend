import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";
import { Redirect } from "react-router-dom";

// Controlled Form Compoenent for Signing into the application
class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameEntry: "",
      toCurriculum: false,
      toSignUp: false,
      user: {}
    };
  }

  // EVENT HANDLER: on form submission to backend
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
        toCurriculum: true,
        user: user
      });
    } else {
      console.log(user.message);
    }
  };

  // EVENT HANDLER: sets the redirect state to go to the sign up page
  handleSignUpClick = async () => {
    await this.setState({
      toSignUp: true
    });
  };

  // EVENT HANDLER: on username change
  handleUsernameChange = e => {
    this.setState({
      usernameEntry: e.target.value
    });
  };

  // renders either a redirect to sign up or curriculum, or shows the controlled form
  render() {
    if (this.state.toSignUp === true) {
      return <Redirect to="/sign-up" />;
    } else if (this.state.toCurriculum === true) {
      return <Redirect to={`/users/${this.state.user.id}/curriculum`} />;
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
