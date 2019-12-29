import React, { Component } from "react";
import LandingContainer from "../components/LandingContainer";
import LoginContainer from "../components/LoginContainer";
import SignUpContainer from "../components/SignUpContainer";
import CurriculumContainer from "../components/CurriculumContainer";
import LessonContainer from "../components/LessonContainer";
import PromptSelectContainer from "../components/PromptSelectContainer";
import PromptContainer from "../components/PromptContainer";
import { BrowserRouter as Router, Route } from "react-router-dom";

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  onLogin = async user => {
    await this.setState({
      current_user: user
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
          <Route
            path="/sign-up"
            render={() => <SignUpContainer handleLogin={this.onLogin} />}
          />
          <Route
            path="/curriculum"
            render={() => (
              <CurriculumContainer current_user={this.state.current_user} />
            )}
          />
          <Route
            path="/lesson"
            render={() => (
              <LessonContainer current_user={this.state.current_user} />
            )}
          />
          <Route
            path="/users/:id/prompts"
            exact
            render={() => (
              <PromptSelectContainer current_user={this.state.current_user} />
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
