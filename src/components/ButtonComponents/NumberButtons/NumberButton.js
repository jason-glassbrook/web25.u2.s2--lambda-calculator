import React from "react";

const NumberButton = (props) => {
  return (
    <button className="number-button" data-value={props.value} onClick={props.onClick}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.char}
    </button>
  );
};
