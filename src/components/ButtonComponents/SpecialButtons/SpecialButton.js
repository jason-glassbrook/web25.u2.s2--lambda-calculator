import React from "react";
import Button from "../Button";

const SpecialButton = (props) => {
  return (
    <Button
      role="special"
      char={props.char}
      value={props.value}
      onClick={props.onClick}
    />
  );
};

export default SpecialButton;
