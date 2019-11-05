import React from "react";
import Button from "../Button";

const NumberButton = (props) => {
  return (
    <Button
      role="number"
      char={props.char}
      value={props.value}
      onClick={props.onClick}
    />
  );
};

export default NumberButton;
