import React from "react";

// import any components needed
import ButtonsGroup from "../ButtonsGroup";
import SpecialButton from "./SpecialButton";
// import your array data to from the provided data file
import { specials as specialsRawData } from "../../../data";

const specialsData = specialsRawData.map (
  (el) => ({
    "char"  : el,
    "value" : el,
  })
);

const Specials = (props) => {
  // STEP 2 - add the imported data to state
  const [specials , setSpecials] = React.useState (specialsData);
  //
  return (
    <ButtonsGroup name="specials">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button component matching the name on the provided file. Pass it any props needed by the child component. */}
      {specials.map ((el) => (
        <SpecialButton
          key={`special ${el.char}`}
          char={el.char}
          value={el.value}
          onClick={() => {}}
        />
      ))}
    </ButtonsGroup>
  );
};

export default Specials;
