import React from 'react';

// Renders the Page Title
const PageTitle = (props) => {
    return (
        <div className="page-title">
            {props.titleText}
        </div>
    );
};

export default PageTitle;