import React, { Component } from 'react';

class LessonContainer extends Component {
    render() {
        return (
            <div>
                Lesson
                You are logged in as user #{this.props.user_id}
            </div>
        );
    }
}

export default LessonContainer;