import React, { Component } from "react";
import PageTitle from "./PageTitle";
import { Image } from "semantic-ui-react";
import PageButton from './PageButton'

class CurriculumContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toLessonSelection: false,
            toLogin: false
        }
    }
    
    goToLessonSelection = async () => {

    }

    goToLogin = async () => {
        
    }
  
    render() {
    return (
      <div>
        <PageTitle titleText="Your Curriculum" />
        <Image src="https://media.giphy.com/media/3htHB35GbROukV2bnR/giphy.gif" />
        <PageButton buttonText="Explore" onClick={goToLessonSelection}/>
        <PageButton buttonText="Logout" onClick={goToLogin}/>
      </div>
    );
  }
}

export default CurriculumContainer;
