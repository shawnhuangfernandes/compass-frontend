import React, { Component } from 'react';
import PageTitle from './PageTitle'
import { Image } from 'semantic-ui-react'
import PageButton from './PageButton'
import { Link }  from 'react-router-dom'
class LandingContainer extends Component {
    render() {
        return (
            <div className="landing-container">
                <PageTitle titleText="COMPASS" />
                <Image src="https://media.giphy.com/media/ijxKTF6iE4K4M/giphy.gif" />
                <Link to="login">
                    <PageButton buttonText="Enter" />
                </Link>
            </div>
        );
    }
}

export default LandingContainer;