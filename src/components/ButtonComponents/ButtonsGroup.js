import React from "react";

const ButtonsGroup = (props) => {
  return (
    <div className={`buttons-group ${props.name}`}>
      {props.children}
    </div>
  );
};

export default ButtonsGroup;