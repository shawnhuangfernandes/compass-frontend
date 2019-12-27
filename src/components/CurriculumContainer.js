import React, { Component } from 'react';

class CurriculumContainer extends Component {
    render() {
        return (
            <div>
                Curriculum
                You are logged in as user #{this.props.user_id}
            </div>
        );
    }
}

export default CurriculumContainer;