import React, { Component } from "react";
import { Grid, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

// This component structures all the prompts into a table
class PromptsTable extends Component {
  // render method
  render() {
    return (
      <Grid divided="vertically">
        <Grid.Row>
          <Link to={`/users/${this.props.current_user_id}/prompts/1`}>
            <Segment inverted color='violet' size="massive">Reading: The Why</Segment>
          </Link>
        </Grid.Row>
        <Grid.Row>
          <Link to={`/users/${this.props.current_user_id}/prompts/2`}>
            <Segment inverted color='violet' size="massive">Video: Know Your Why</Segment>
          </Link>
        </Grid.Row>
        <Grid.Row>
          <Link to={`/users/${this.props.current_user_id}/prompts/3`}>
            <Segment inverted color='violet' size="massive">Activity: The Three Main Questions</Segment>
          </Link>
        </Grid.Row>
        <Grid.Row>
          <Link to={`/users/${this.props.current_user_id}/prompts/4`}>
            <Segment inverted color='violet' size="massive">Reading: Why You Should Care About Purpose</Segment>
          </Link>
        </Grid.Row>
        <Grid.Row>
          <Link to={`/users/${this.props.current_user_id}/prompts/5`}>
            <Segment inverted color='violet' size="massive">Reading: How To Write A Purpose Statement</Segment>
          </Link>
        </Grid.Row>
        <Grid.Row>
          <Link to={`/users/${this.props.current_user_id}/prompts/6`}>
            <Segment inverted color='violet' size="massive">Activity: Write A Purpose Statement</Segment>
          </Link>
        </Grid.Row>
      </Grid>
    );
  }
}

export default PromptsTable;
