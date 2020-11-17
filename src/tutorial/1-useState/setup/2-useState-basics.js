import React, { useState } from "react";
// useState - function, it is a 'named import'
// Hooks will start with "useX"
// Component names must be uppercase i.e. 'UseStateBasics'
// Hook must be in fuction/component body (in scope)
// Cannot call hook conditionally within main component function

const UseStateBasics = () => {
  //if useState returns an array, we can assign it to a variable
  //console.log(useState("hello world"));
  // const value = useState(1)[0];
  // // handler will be the function that controls the value in our useState
  // const handler = useState(1)[1];
  // console.log(value, handler);

  // normal convention [text, setText] or [apple, setApple] via Array Destructuring
  // create a const that has an array of two parameters [text, setText]
  // Bind that const to a useState function that will be set to whatever default value you want into the parameters
  const [text, setText] = useState("random title");

  //handleClick function will then use setText to intalize a value, so when event handler is clicked, the state of whatever is evoked is changed
  const handleClick = () => {
    //logic to toggle between "random title" and "nice"
    if (text === "random title") {
      setText("Nice");
    } else {
      setText("random title");
    }
  };

  return (
    <React.Fragment>
      {/* text is being evoked */}
      <h2>{text}</h2>

      {/* Intalize an onClick event that goes to a function handleClick */}
      <button className="btn" onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
