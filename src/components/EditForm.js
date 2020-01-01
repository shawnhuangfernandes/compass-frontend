import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Button, Form } from "semantic-ui-react";

class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameEntry: "AL",
      nameEntry: "CAPWN",
      toCurriculum: false,
      toLogin: false
    };
  }

  handleBackClick = async () => {
    await this.setState({
      toLogin: true
    });
  };

  onSubmitForm = async e => {
    const fetchUser = await fetch(`http://localhost:3000/users/${this.props.current_user.id}`, {
      method: "PUT",
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
          <Form onSubmit={this.onSubmitForm} size="massive">
            <Form.Field>
              <label>Choose A Username</label>
              <input
                onChange={this.handleUsernameChange}
                placeholder={this.props.current_user.username}
              />
            </Form.Field>
            <Form.Field>
              <label>Choose A Name</label>
              <input
                onChange={this.handleNameChange}
                placeholder={this.props.current_user.name}
              />
            </Form.Field>
            <div className="signup-button-container">
              <Button
                type="submit"
                size="massive"
                content="Register"
                basic
                inverted
                color="violet"
              />
              <Button
                onClick={this.handleBackClick}
                size="massive"
                content="Back"
                basic
                inverted
                color="violet"
              />
            </div>
          </Form>
        </div>
      );
    }
  }
}

export default EditForm;
