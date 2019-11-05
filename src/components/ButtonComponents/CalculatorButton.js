import React from "react";

const CalculatorButton = (props) => {
  return (
    <button className={`${props.role}-button`} data-value={props.value} onClick={props.onClick}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.char}
    </button>
  );
};

export default CalculatorButton;
