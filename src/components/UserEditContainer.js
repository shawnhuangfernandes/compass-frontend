import React, { Component } from "react";
import PageTitle from "./PageTitle";
import { Image } from "semantic-ui-react";
import EditForm from "./EditForm";

class UserEditContainer extends Component {
  constructor(props) {
    super(props);
  }

  handleEdit = () => {
    // make a PUT to the appropriate URL
    // redirect to the curriculum page
  };

  handleDelete = () => {
    // make a DELETE request to the appropriate URL
    // redirect to the login page
  };

  render() {
    return (
      <div>
        <PageTitle titleText="Edit Your Account" />
        <div className="signup-image-container">
          <Image src="https://media.giphy.com/media/13jbqcAvizxKUg/giphy.gif" />
        </div>
        <EditForm
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
          current_user={this.props.current_user}
          handleLogin={this.props.handleLogin}
        />
      </div>
    );
  }
}

export default UserEditContainer;
