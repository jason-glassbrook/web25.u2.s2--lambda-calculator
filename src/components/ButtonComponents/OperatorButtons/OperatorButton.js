import React from "react";
import Button from "../Button";

const OperatorButton = (props) => {
  return (
    <Button
      role="operator"
      char={props.char}
      value={props.value}
      onClick={props.onClick}
    />
  );
};

export default OperatorButton;
