import React, { useState, useEffect } from "react";
//Side Effects: Any work outside of component i.e. changing document title, fetching data, setting up evenListener, etc.
// useEffect second most used hook
// side effect = useEffect

// Useffect runs by default, after every re-render of component
// Can have as many useEffects as you want
// cleanup function
// second parameter

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  //HOOKS CANNOT BE CONDITIONAL
  // if (value > 0)
  useEffect(() => {
    console.log("Call useEffect");
    //Conditionals can be used within hooks
    if (value >= 1) {
      //updating document title everytime we click a button, using useEffect
      document.title = `New Messages(${value})`;
    }
    //List of dependencies "[]", if array is empty then it will only run on inital render
    //If dependency array has a value, then it will render the changes
  }, [value]);

  useEffect(() => {
    console.log("Hello World");
  }, []);

  // Would get logged twice because of React.strictMode in index.js
  // even console log is considered a side-effect
  // console.log("render compnoent");

  return (
    <>
      <h1>{value}</h1>
      {/* When clicking on the Button, useEffect is invoked 
      (side-effect) and for each click useEffect is re-rendered */}
      <button className="btn" onClick={() => setValue(value + 1)}>
        Click Me
      </button>
    </>
  );
};

export default UseEffectBasics;
