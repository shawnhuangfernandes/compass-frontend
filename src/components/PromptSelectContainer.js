import React, { Component } from 'react';

class PromptSelectContainer extends Component {
    render() {
        return (
            <div>
                Prompt Select
                You are logged in as user #{this.props.user_id}
            </div>
        );
    }
}

export default PromptSelectContainer;