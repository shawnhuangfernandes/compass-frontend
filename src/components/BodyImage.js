import React from "react";
import { Image } from "semantic-ui-react";

const BodyImage = props => {
  return (
    <Image className="body-image"
      src={props.url}
      size="medium"
      rounded
    />
  );
};

export default BodyImage;
