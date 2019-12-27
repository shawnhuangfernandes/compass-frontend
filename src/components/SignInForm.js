import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameEntry: "",
      usernameEntry: ""
    };
  }

  async handleLogin(e) {
    console.log(e.target);
  };

  handleUsernameChange = e => {
    this.setState({
        usernameEntry: e.target.value
    })
  };

  handleNameChange = e => {
    this.setState({
        nameEntry: e.target.value
    })
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleLogin}>
          <Form.Field>
            <label>Username</label>
            <input
              onChange={this.handleUsernameChange}
              placeholder="Please Enter A Username"
            />
          </Form.Field>
          <Form.Field>
            <label>Name</label>
            <input
              onChange={this.handleNameChange}
              placeholder="Please Enter Your Name"
            />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}

export default SignInForm;
