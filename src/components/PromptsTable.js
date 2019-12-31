import React, { Component } from "react";
import { Grid, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

class PromptsTable extends Component {
  render() {
    return (
      <Grid divided="vertically">
        <Grid.Row>
          <Link to={`/users/${this.props.current_user.id}/prompts/1`}>
            <Segment>Reading: Why You're Here</Segment>
          </Link>
        </Grid.Row>
        <Grid.Row>
          <Link to={`/users/${this.props.current_user.id}/prompts/2`}>
            <Segment>Video: Know Your Why</Segment>
          </Link>
        </Grid.Row>
        <Grid.Row>
          <Link to={`/users/${this.props.current_user.id}/prompts/3`}>
            <Segment>Activity: A Purpose Interview</Segment>
          </Link>
        </Grid.Row>
        <Grid.Row>
          <Link to={`/users/${this.props.current_user.id}/prompts/4`}>
            <Segment>Reading: Purpose Statements</Segment>
          </Link>
        </Grid.Row>
        <Grid.Row>
          <Link to={`/users/${this.props.current_user.id}/prompts/5`}>
            <Segment>Activity: Writing a Purpose Statement</Segment>
          </Link>
        </Grid.Row>
        <Grid.Row>
          <Link to={`/users/${this.props.current_user.id}/prompts/6`}>
            <Segment>Video: Conclusion</Segment>
          </Link>
        </Grid.Row>
      </Grid>
    );
  }
}

export default PromptsTable;
