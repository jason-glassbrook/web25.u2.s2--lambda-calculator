import React from "react";

// import any components needed
import SpecialButton from "./SpecialButton";
// import your array data to from the provided data file
import { specials as specialsData } from "../../../data";

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specials , setSpecials] = React.useState (specialsData);
  //
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};
