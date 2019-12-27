import React from 'react';

const BodyImage = (props) => {
    return (
        <>
            <img className="body-image" src={props.url} alt="Woops!"/>
        </>
    );
};

export default BodyImage;