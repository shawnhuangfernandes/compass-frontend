import React from "react";
import { Image } from "semantic-ui-react";

const AvatarImage = props => {
  return (
    <Image className="avatar-image" src={props.url} size="medium" rounded />
  );
};

export default AvatarImage;
