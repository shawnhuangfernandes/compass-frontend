import React from 'react';

const PageTitle = (props) => {
    return (
        <div className="page-title">
            {props.titleText}
        </div>
    );
};

export default PageTitle;