import React, { useState } from "react";
// short-circuit evaluation: If a class doesnt have a certain property, we can add logic to return a desired output instead.
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("Peter");
  //firstValue: either text or "hello world", if no text then return "hello world"
  const firstValue = text || "hello world";
  //secondvalue: text and "hellow world", returns hello world when text is available
  const secondValue = text && "hello world";

  return (
    <>
      {/* Wont work {if(console.log("hello world"))} */}

      {/* <h1>{firstValue}</h1>
      <h1>value : {secondValue}</h1> */}

      {/*if text is true, display "My name is"*/}
      <h1>{text && "My name is "}</h1>
      {/*if text is true, display "text", if false then print "No Name"*/}
      <h1>{text || "No Name"}</h1>
      {/*if text is not true, display "Nice to meet you"*/}
      <h1>{!text || "Nice to meet you"}</h1>
    </>
  );
};

export default ShortCircuit;
