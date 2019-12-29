import React, { Component } from 'react';
import PageTitle from './PageTitle';
import SignUpForm from './SignUpForm'

class SignUpContainer extends Component {
    render() {
        return (
            <div>
                <PageTitle titleText="SIGN UP" />
                <SignUpForm handleLogin={this.props.handleLogin}/>
            </div>
        );
    }
}

export default SignUpContainer;