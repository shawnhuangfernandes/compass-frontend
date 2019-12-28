import React, { Component } from "react";
import LandingContainer from "../components/LandingContainer";
import LoginContainer from "../components/LoginContainer";
import SignUpContainer from "../components/SignUpContainer";
import CurriculumContainer from "../components/CurriculumContainer";
import LessonContainer from "../components/LessonContainer";
import PromptSelectContainer from "../components/PromptSelectContainer";
import PromptContainer from "../components/PromptContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Redirect } from "react-router-dom";

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: ""
    };
  }

  onLogin = async id => {
    await this.setState({
      user_id: id
    });
  };

  render() {
    return (
      <Router>
        <div>
            <Route path="/" exact render={() => <LandingContainer />} />
            <Route
              path="/login"
              render={() => <LoginContainer handleLogin={this.onLogin} />}
            />
            <Route path="/sign-up" render={() => <SignUpContainer />} />
            <Route
              path="/curriculum"
              render={() => (
                <CurriculumContainer user_id={this.state.user_id} />
              )}
            />
            <Route
              path="/lesson"
              render={() => <LessonContainer user_id={this.state.user_id} />}
            />
            <Route
              path="/users/:id/prompts"
              exact
              render={() => (
                <PromptSelectContainer user_id={this.state.user_id} />
              )}
            />
            <Route
              path="/users/prompts/:prompt_id"
              render={() => <PromptContainer user_id={this.state.user_id} />}
            />
        </div>
      </Router>
    );
  }
}

export default MainContainer;
