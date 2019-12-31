import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Button, Form } from "semantic-ui-react";

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameEntry: "",
      nameEntry: "",
      toCurriculum: false,
      toLogin: false
    };
  }

  onSubmitForm = async e => {
    const fetchUser = await fetch("http://localhost:3000/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: this.state.usernameEntry,
        name: this.state.nameEntry
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

  handleBackClick = async () => {
    await this.setState({
      toLogin: true
    });
  };

  handleUsernameChange = e => {
    this.setState({
      usernameEntry: e.target.value
    });
  };

  handleNameChange = e => {
    this.setState({
      nameEntry: e.target.value
    });
  };

  render() {
    if (this.state.toLogin === true) {
      return <Redirect to="/login" />;
    } else if (this.state.toCurriculum === true) {
      return <Redirect to="/curriculum" />;
    } else {
      return (
        <div>
          <Form onSubmit={this.onSubmitForm}>
            <Form.Field>
              <label>Choose A Username</label>
              <input
                onChange={this.handleUsernameChange}
                placeholder="Please Enter A Username"
              />
            </Form.Field>
            <Form.Field>
              <label>Choose A Name</label>
              <input
                onChange={this.handleNameChange}
                placeholder="Please Enter Your Name"
              />
            </Form.Field>
            <Button type="submit">Sign Up</Button>
            <Button onClick={this.handleBackClick}>Go Back</Button>
          </Form>
        </div>
      );
    }
  }
}

export default SignUpForm;
