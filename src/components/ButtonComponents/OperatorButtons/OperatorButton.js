import React from "react";
import CalculatorButton from "../CalculatorButton";

const OperatorButton = (props) => {
  return (
    <CalculatorButton
      role="operator"
      char={props.char}
      value={props.value}
      onClick={props.onClick}
    />
  );
};
