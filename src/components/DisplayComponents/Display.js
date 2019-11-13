import React from "react";

const Display = (props) => {
  return (
    <div className="display" data-value={props.value}>
      {/* Display any props data here */}
      {props.value}
    </div>
  );
};

export default Display;
