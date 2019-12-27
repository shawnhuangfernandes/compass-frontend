import React, { Component } from "react";
import LandingContainer from "../components/LandingContainer";
import LoginContainer from "../components/LoginContainer";
import SignUpContainer from "../components/SignUpContainer";
import CurriculumContainer from "../components/CurriculumContainer";
import LessonContainer from "../components/LessonContainer";
import PromptSelectContainer from "../components/PromptSelectContainer";
import PromptContainer from "../components/PromptContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: ""
        }
    }
    
    onLogin = (id) => {
        // set state here for login
    }
  
    render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={LandingContainer} />
          <Route path="/login" component={LoginContainer} />
          <Route path="/sign-up" component={SignUpContainer} />
          <Route path="/curriculum" component={CurriculumContainer} />
          <Route path="/lesson" component={LessonContainer} />
          <Route path="/users/:id/prompts" exact component={PromptSelectContainer} />
          <Route
            path="prompts/:prompt_id/responses/1"
            exact component={PromptContainer /* Pass prop through */}
          />
        </div>
      </Router>
    );
  }
}

export default MainContainer;
