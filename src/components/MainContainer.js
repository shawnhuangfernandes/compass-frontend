import React, { Component } from "react";
import LandingContainer from "../components/LandingContainer";
import LoginContainer from "../components/LoginContainer";
import SignUpContainer from "../components/SignUpContainer";
import CurriculumContainer from "../components/CurriculumContainer";
import LessonContainer from "../components/LessonContainer";
import PromptSelectContainer from "../components/PromptSelectContainer";
import PromptContainer from "../components/PromptContainer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
      <div className="main-container">
        <Router>
          <Switch>
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
              path="users/:user_id/curriculum"
              render={() => (
                <CurriculumContainer
                  current_user={this.state.current_user}
                  handleLogout={this.onLogout}
                />
              )}
            />
            <Route
              path="users/:user_id/lesson"
              render={() => (
                <LessonContainer current_user={this.state.current_user} />
              )}
            />
            <Route
              path="/users/:user_id/prompts"
              exact
              render={routerProps => (
                <PromptSelectContainer
                  {...routerProps}
                  current_user={this.state.current_user}
                />
              )}
            />
            <Route
              path={`/users/:user_id/prompts/:prompt_id`}
              render={routerProps => (
                <PromptContainer
                  {...routerProps}
                  current_user={this.state.current_user}
                />
              )}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default MainContainer;
