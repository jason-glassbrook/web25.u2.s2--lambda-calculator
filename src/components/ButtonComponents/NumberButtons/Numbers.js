import React from "react";

// import any components needed
import ButtonsGroup from "../ButtonsGroup";
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
    <ButtonsGroup name="numbers">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button component matching the name on the provided file. Pass it any props needed by the child component. */}
      {numbers.map ((el) => (
        <NumberButton
          key={`number ${el.char}`}
          char={el.char}
          value={el.value}
          onClick={() => {}}
        />
      ))}
    </ButtonsGroup>
  );
};

export default Numbers;
