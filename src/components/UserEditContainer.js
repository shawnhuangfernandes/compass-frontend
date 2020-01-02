import React, { Component } from "react";
import PageTitle from "./PageTitle";
import { Image } from "semantic-ui-react";
import EditForm from "./EditForm";

class UserEditContainer extends Component {

constructor(props) {
  super(props);
  this.state = {
    user: {}
  }
}


  componentDidMount() {
    this.fetchTheUser();
  }

  fetchTheUser = async () => {
    const fetchUser = await fetch(
      `http://localhost:3000/users/${this.props.match.params.user_id}`
    );
    const user = await fetchUser.json();
    await this.setState({
      user: user
    });
  }

  render() {
    return (
      <div className="signup-container">
        <PageTitle titleText="Edit Your Account" />
        <div className="signup-image-container">
          <Image src="https://media.giphy.com/media/13jbqcAvizxKUg/giphy.gif" />
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
