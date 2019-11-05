import React from "react";
import CalculatorButton from "../CalculatorButton";

const NumberButton = (props) => {
  return (
    <CalculatorButton
      role="number"
      char={props.char}
      value={props.value}
      onClick={props.onClick}
    />
  );
};
