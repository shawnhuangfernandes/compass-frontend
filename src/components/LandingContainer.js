import React, { Component } from 'react';
import PageTitle from './PageTitle'
import BodyImage from './BodyImage'
import PageButton from './PageButton'

class LandingContainer extends Component {
    render() {
        return (
            <div className="landing-container">
                <PageTitle titleText="COMPASS" />
                <BodyImage url="https://media.giphy.com/media/ijxKTF6iE4K4M/giphy.gif" />
                <PageButton buttonText="Enter" />
            </div>
        );
    }
}

export default LandingContainer;