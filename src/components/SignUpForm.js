import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Button, Form } from "semantic-ui-react";

// Component that serves as a controlled sign up form
class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameEntry: "",
      nameEntry: "",
      toCurriculum: false,
      toLogin: false,
      user: {}
    };
  }

  // EVENT HANDLER: on form submission
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
        toCurriculum: true,
        user: user
      });
    } else {
      console.log(user.message);
    }
  };

  // EVENT HANDLER: on button click to go back to login
  handleBackClick = async () => {
    await this.setState({
      toLogin: true
    });
  };

  // EVENT HANDLER: on user name change
  handleUsernameChange = e => {
    this.setState({
      usernameEntry: e.target.value
    });
  };

  // EVENT HANDLER: on name change
  handleNameChange = e => {
    this.setState({
      nameEntry: e.target.value
    });
  };

  // render method
  render() {
    if (this.state.toLogin === true) {
      return <Redirect to="/login" />;
    } else if (this.state.toCurriculum === true) {
      return <Redirect to={`/users/${this.state.user.id}/curriculum`} />;
    } else {
      return (
        <div>
          <Form onSubmit={this.onSubmitForm} size="massive">
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
            <div className="signup-button-container">
              <Button type="submit" size="massive" content="Register" basic inverted color='violet'/>
              <Button
                onClick={this.handleBackClick}
                size="massive"
                content="Back"
                basic inverted color='violet'
              />
            </div>
          </Form>
        </div>
      );
    }
  }
}

export default SignUpForm;
