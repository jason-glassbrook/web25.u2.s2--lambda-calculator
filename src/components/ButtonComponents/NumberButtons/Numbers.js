import React from "react";

// import any components needed
import NumberButton from "./NumberButton";
// import your array data to from the provided data file
import { numbers as numbersRawData } from "../../../data";

const numbersData = numbersRawData.map (
  (el) => ({
    "char"  : el,
    "value" : el,
  })
);

const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  const [numbers , setNumbers] = React.useState (numbersData);
  //
  return (
    <div className="button-group numbers">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button component matching the name on the provided file. Pass it any props needed by the child component. */}

    </div>
  );
};

export default Numbers;
