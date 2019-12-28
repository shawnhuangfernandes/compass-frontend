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
    console.log(this.props);
    const fetchUser = await fetch("http://localhost:3000/users/find-user", {
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
      this.props.handleLogin(user.id);
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
    // return <Redirect to="/curriculum" />;
    if (this.state.toCurriculum === true) {
      return <Redirect to="/curriculum" />;
    } else {
      return (
        <div>
          <Form onSubmit={this.onSubmitForm}>
            <Form.Field>
              <label>Username</label>
              <input
                onChange={this.handleUsernameChange}
                placeholder="Please Enter A Username"
              />
            </Form.Field>
            <Button type="submit">Submit</Button>
            <Button onClick={this.handleSignUpClick}>Sign Up</Button>
          </Form>
        </div>
      );
    }
  }
}

export default SignInForm;
