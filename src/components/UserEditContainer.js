import React, { Component } from "react";
import PageTitle from "./PageTitle";
import { Image } from "semantic-ui-react";
import EditForm from "./EditForm";

// This is the user edit container for the settings page
class UserEditContainer extends Component {

constructor(props) {
  super(props);
  this.state = {
    user: {}
  }
}

// when the component mounts, THEN get the user from the backend
  componentDidMount() {
    this.fetchTheUser();
  }

  // gets the user from the backend using the id from the URL
  fetchTheUser = async () => {
    const fetchUser = await fetch(
      `http://localhost:3000/users/${this.props.match.params.user_id}`
    );
    const user = await fetchUser.json();
    await this.setState({
      user: user
    });
  }

  // render method
  render() {
    return (
      <div className="signup-container">
        <PageTitle titleText="Edit Your Account" />
        <div className="signup-image-container">
          <Image src="https://mod4-project.s3.us-east-2.amazonaws.com/apple.png" />
        </div>
        <EditForm
          handleEdit={(e) => this.props.Click}
          handleDelete={this.props.handleDelete}
          current_user_id={this.props.match.params.user_id}
          handleLogin={this.props.handleLogin}
          
        />
      </div>
    );
  }
}

export default UserEditContainer;
