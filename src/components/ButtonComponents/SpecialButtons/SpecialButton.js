import React from "react";
import CalculatorButton from "../CalculatorButton";

const SpecialButton = (props) => {
  return (
    <CalculatorButton
      role="special"
      char={props.char}
      value={props.value}
      onClick={props.onClick}
    />
  );
};
