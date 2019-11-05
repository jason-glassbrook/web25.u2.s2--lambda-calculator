import React from "react";

const ButtonsGroup = (props , children) => {
  return (
    <div className={`buttons-group ${props.name}`}>
      {children}
    </div>
  );
};

export default ButtonsGroup;