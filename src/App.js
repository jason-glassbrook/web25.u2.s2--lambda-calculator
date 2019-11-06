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

/***************************************
  INITIAL STATE
***************************************/
// story
const initStory = {
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
};

// flag clicks for possible tokenization
const initWasClicked = false;

// flag tokenization for possible composition
const initWasTokenized = false;

// flag composition for display
const initWasComposed = false;

/***************************************
  CLICKS
***************************************/
// handle generic clicks on buttons
const addClick =
  (setStory , setWasClicked) =>
  ({ type , char , value }) =>
  {
    /* [TESTING] */ console.log (`clicked: [${type} "${char}"]`);
    setStory (
      (story) => {
        const clicks = story["clicks"];
        /* [TESTING] */ console.log (clicks);
        clicks.unshift ({
          "type"  : type,
          "char"  : char,
          "value" : value,
        });
        /* [TESTING] */ console.log (clicks);
        return ({ ...story , "clicks" : clicks });
      }
    );
    setWasClicked (true);
    console.log (`... handled it.`); // TESTING
  };

// handle clicks on special buttons
const addSpecialClick =
  (...setters) =>
  (data) =>
  (addClick (...setters) ({
    "type" : "special",
    ...data,
  }));

// handle clicks on digit buttons
const addDigitClick =
  (...setters) =>
  (data) =>
  (addClick (...setters) ({
    "type" : "digit",
    ...data,
  }));

// handle clicks on operator buttons
const addOperatorClick =
  (...setters) =>
  (data) =>
  (addClick (...setters) ({
    "type" : "operator",
    ...data,
  }));

/***************************************
  TOKENS
***************************************/
// handle composing tokens
const addToken = (setStory , setWasTokenized) => ({ type , value }) => {
  /* [TESTING] */ console.log (`tokenizing?`);
  /* [TESTING] */ console.log (type);
  /* [TESTING] */ console.log (value);
  setStory (
    (story) => {
      const tokens = story["tokens"];
      /* [TESTING] */ console.log (tokens);
      tokens.unshift ({
        "type"  : type,
        "value" : value,
      });
      /* [TESTING] */ console.log (tokens);
      return ({ ...story , "tokens" : tokens });
    }
  );
  setWasTokenized (true);
  /* [TESTING] */ console.log (`... handled it.`);
};

/***************************************
  VALUES
***************************************/
// handle updating values
const addValue = (setStory , setWasComposed) => ({ value }) => {
  /* [TESTING] */ console.log (`composing?`);
  /* [TESTING] */ console.log (value);
  setStory (
    (story) => {
      const values = story["values"];
      /* [TESTING] */ console.log (values);
      values.unshift (value);
      /* [TESTING] */ console.log (values);
      return ({ ...story , "values" : values });
    }
  );
  setWasComposed (true);
  /* [TESTING] */ console.log (`... handled it.`);
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
  
  /// states ///
  const [story , setStory] = React.useState (initStory);
  const [wasClicked , setWasClicked] = React.useState (initWasClicked);
  const [wasTokenized , setWasTokenized] = React.useState (initWasTokenized);
  const [wasComposed , setWasComposed] = React.useState (initWasComposed);
  const [output , setOutput] = React.useState (story.values[0]);

  /// effects ///
  // when something was clicked...
  React.useEffect (() => {
    // console.log (wasClicked);
    if (wasClicked) {
      /* [TESTING] */ setOutput (story.values[0]);
      setWasClicked (false);
    }
  } , [wasClicked]);

  return (
    <div className="container">
      <Logo />
      <div className="App">
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
        <Display value={output}/>
        <ButtonsGroup name="groups">
          <Specials
            onClick={addSpecialClick (setStory , setWasClicked)}
          />
          <Numbers
            onClick={addDigitClick (setStory , setWasClicked)}
          />
          <Operators
            onClick={addOperatorClick (setStory , setWasClicked)}
          />
        </ButtonsGroup>
      </div>
    </div>
  );
}

export default App;
