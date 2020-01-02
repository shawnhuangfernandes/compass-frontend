import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Button, Form } from "semantic-ui-react";
import { Link } from 'react-router-dom'

class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameEntry: "",
      nameEntry: "",
      toCurriculum: false,
      user: {}
    };
  }

  handleBackClick = async e => {
    e.preventDefault();
    await this.setState({
      toCurriculum: true
    });
  };

  onSubmitForm = async (e) => {
    const fetchUser = await fetch(`http://localhost:3000/users/${this.props.current_user_id}`, {
      method: "PATCH",
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

    this.props.handleLogin(user);
  }

  handleDeleteClick = async (e) => {
    await fetch(`http://localhost:3000/users/${this.props.current_user_id}`, {
      method: 'DELETE'
    });

    this.props.handleDelete();
  }

  

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
      return <Redirect to={'curriculum'} />;
    } else {
      return (
        <div>
          <Form onSubmit={this.onSubmitForm} size="massive">
            <Form.Field>
              <label>Choose A Username</label>
              <input
                onChange={this.handleUsernameChange}
                placeholder={"Enter Your New Username Here"}
              />
            </Form.Field>
            <Form.Field>
              <label>Choose A Name</label>
              <input
                onChange={this.handleNameChange}
                placeholder={"Enter Your New Name Here"}
              />
            </Form.Field>
            <div className="signup-button-container">
              <Button
                type="submit"
                size="massive"
                content="Update"
                basic
                inverted
                color="violet"
              />
              <Link to="/login">
              <Button
                onClick={this.handleDeleteClick}
                size="massive"
                content="Delete User"
                basic
                inverted
                color="violet"
              />
              </Link>
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
