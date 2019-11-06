import React from "react";
import "./App.css";
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";
import Display from "./components/DisplayComponents/Display";
import ButtonsGroup from "./components/ButtonComponents/ButtonsGroup";
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers";
import Operators from "./components/ButtonComponents/OperatorButtons/Operators";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials";

/***********************************************************
  STATE HANDLERS
***********************************************************/
// initial state
const initState = {
  // the series of clicks
  "clicks" : [
    {
      "type"  : "init",
      "char"  : "0",
      "value" : "0",
    }
  ],
  // the "tokens" constructed from clicks
  "tokens" : [
    {
      "type"  : "number",
      "value" : 0,
    },
  ],
  // the final values
  "values" : [
    0,
  ]
}

/***************************************
  CLICKS
***************************************/
// handle generic clicks on buttons
const addClick = (setState) => ({ type , char , value }) => {
  setState (
    (oldState) => {
      const clicks = oldState["clicks"];
      clicks.shift ({
        "type"  : type,
        "char"  : char,
        "value" : value,
      });
      return ({ "clicks" : clicks });
    }
  );
};

// handle clicks on special buttons
const addSpecialClick =
  (setState) =>
  (data) =>
  (addClick (setState) ({
    "type" : "special",
    ...data,
  }));

// handle clicks on digit buttons
const addDigitClick =
  (setState) =>
  (data) =>
  (addClick (setState) ({
    "type" : "digit",
    ...data,
  }));

// handle clicks on operator buttons
const addOperatorClick =
  (setState) =>
  (data) =>
  (addClick (setState) ({
    "type" : "operator",
    ...data,
  }));

/***************************************
  TOKENS
***************************************/
// handle composing tokens
const addToken = (setState) => ({ type , value }) => {
  setState (
    (oldState) => {
      const tokens = oldState["tokens"];
      tokens.shift ({
        "type"  : type,
        "value" : value,
      });
      return ({ "tokens" : tokens });
    }
  );
};

/***************************************
  VALUES
***************************************/
// handle updating values
const addValue = (setState) => ({ value }) => {
  setState (
    (oldState) => {
      const values = oldState["values"];
      values.shift (value);
      return ({ "values" : values });
    }
  );
};

/***********************************************************
  APP
***********************************************************/
function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props
  const [state , setState] = React.useState (initState);

  return (
    <div className="container">
      <Logo />
      <div className="App">
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
        <Display value={state.values[0]}/>
        <ButtonsGroup name="groups">
          <Specials
            onClick={addSpecialClick (setState)}
          />
          <Numbers
            onClick={addDigitClick (setState)}
          />
          <Operators
            onClick={addOperatorClick (setState)}
          />
        </ButtonsGroup>
      </div>
    </div>
  );
}

export default App;
