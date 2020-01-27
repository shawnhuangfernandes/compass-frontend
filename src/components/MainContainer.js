import React, { Component } from "react";
import LandingContainer from "../components/LandingContainer";
import LoginContainer from "../components/LoginContainer";
import SignUpContainer from "../components/SignUpContainer";
import CurriculumContainer from "../components/CurriculumContainer";
import LessonContainer from "../components/LessonContainer";
import PromptSelectContainer from "../components/PromptSelectContainer";
import PromptContainer from "../components/PromptContainer";
import UserEditContainer from "../components/UserEditContainer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// This is the main container that routes the user to the different parts of the app
class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  // method that is passed as props to the sign in page
  onLogin = async user => {
    await this.setState({
      current_user: user
    });
  };

  // method that is passed as props to the settings page
  onDelete = async user => {
    await this.setState({
      current_user: {}
    });
  };

  // render method that renders all the routes
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
              exact
              path="/users/:user_id/curriculum"
              render={routerProps => (
                <CurriculumContainer
                  {...routerProps}
                  current_user={this.state.current_user}
                  handleLogout={this.onLogout}
                />
              )}
            />
            <Route
              path="/lesson"
              exact
              render={routerProps => (
                <LessonContainer
                  {...routerProps}
                  current_user={this.state.current_user}
                />
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
              exact
              path={`/users/:user_id/prompts/:prompt_id`}
              render={routerProps => (
                <PromptContainer
                  {...routerProps}
                  current_user={this.state.current_user}
                />
              )}
            />
            <Route
              exact
              path={`/users/:user_id/settings`}
              render={routerProps => (
                <UserEditContainer
                  {...routerProps}
                  current_user={this.state.current_user}
                  handleLogin={this.onLogin}
                  handleDelete={this.onDelete}
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
