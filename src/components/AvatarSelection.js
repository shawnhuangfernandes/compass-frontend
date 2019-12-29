import React, { Component } from "react";
import { Grid, Image } from "semantic-ui-react";

class AvatarSelection extends Component {
  constructor(props) {
    super(props);
    this.props.handleSelectAvatar(
      "https://media.giphy.com/media/3oz8xKZfsJNTgEdWw0/giphy.gif"
    );
  }

  handleAvatarSelect = e => {
    this.props.handleSelectAvatar(e.target.src);
  };

  render() {
    return (
      <Grid columns={3} divided padded>
        <Grid.Row>
          <Grid.Column>
            <Image
              className="avatar-icon"
              onClick={this.handleAvatarSelect}
              src="https://media.giphy.com/media/3oz8xKZfsJNTgEdWw0/giphy.gif"
            />
          </Grid.Column>
          <Grid.Column>
            <Image
              className="avatar-icon"
              onClick={this.handleAvatarSelect}
              src="https://media.giphy.com/media/3oz8xKZfsJNTgEdWw0/giphy.gif"
            />
          </Grid.Column>
          <Grid.Column>
            <Image
              className="avatar-icon"
              onClick={this.handleAvatarSelect}
              src="https://media.giphy.com/media/3oz8xKZfsJNTgEdWw0/giphy.gif"
            />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <Image
              className="avatar-icon"
              onClick={this.handleAvatarSelect}
              src="https://media.giphy.com/media/3oz8xKZfsJNTgEdWw0/giphy.gif"
            />
          </Grid.Column>
          <Grid.Column>
            <Image
              className="avatar-icon"
              onClick={this.handleAvatarSelect}
              src="https://media.giphy.com/media/3oz8xKZfsJNTgEdWw0/giphy.gif"
            />
          </Grid.Column>
          <Grid.Column>
            <Image
              className="avatar-icon"
              onClick={this.handleAvatarSelect}
              src="https://media.giphy.com/media/3oz8xKZfsJNTgEdWw0/giphy.gif"
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default AvatarSelection;
