import React from "react";

// import any components needed
import OperatorButton from "./OperatorButton";
// import your array data to from the provided data file
import { operators as operatorsData } from "../../../data";

const Operators = (props) => {
  // STEP 2 - add the imported data to state
  const [operators , setOperators] = React.useState (operatorsData);
  //
  return (
    <div>{
      /* STEP 3 - Use .map() to iterate over your array data and return a button component matching the name on the provided file. Pass it any props needed by the child component. */
    }</div>
  );
};

export default Operators;
