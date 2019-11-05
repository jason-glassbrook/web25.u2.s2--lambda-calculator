import React from "react";

const SpecialButton = (props) => {
  return (
    <button className="special-button" data-value={props.value} onClick={props.onClick}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.char}
    </button>
  );
};
