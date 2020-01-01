import React, { Component } from "react";
import { Grid, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

class PromptsTable extends Component {
  render() {
    return (
      <Grid divided="vertically">
        <Grid.Row>
          <Link to={`/users/${this.props.current_user_id}/prompts/1`}>
            <Segment inverted color='violet'>Reading: Why You're Here</Segment>
          </Link>
        </Grid.Row>
        <Grid.Row>
          <Link to={`/users/${this.props.current_user_id}/prompts/2`}>
            <Segment inverted color='violet'>Video: Know Your Why</Segment>
          </Link>
        </Grid.Row>
        <Grid.Row>
          <Link to={`/users/${this.props.current_user_id}/prompts/3`}>
            <Segment inverted color='violet'>Activity: A Purpose Interview</Segment>
          </Link>
        </Grid.Row>
        <Grid.Row>
          <Link to={`/users/${this.props.current_user_id}/prompts/4`}>
            <Segment inverted color='violet'>Reading: Purpose Statements</Segment>
          </Link>
        </Grid.Row>
        <Grid.Row>
          <Link to={`/users/${this.props.current_user_id}/prompts/5`}>
            <Segment inverted color='violet'>Activity: Writing a Purpose Statement</Segment>
          </Link>
        </Grid.Row>
        <Grid.Row>
          <Link to={`/users/${this.props.current_user_id}/prompts/6`}>
            <Segment inverted color='violet'>Video: Conclusion</Segment>
          </Link>
        </Grid.Row>
      </Grid>
    );
  }
}

export default PromptsTable;
