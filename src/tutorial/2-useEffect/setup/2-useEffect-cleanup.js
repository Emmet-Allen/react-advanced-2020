import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  // This will set the value of that updated resize
  const [size, setSize] = useState(window.innerWidth);

  // This will check size of window
  const checkSize = () => {
    setSize(window.innerWidth);
  };

  // Each time "resize" takes place, we also trigger a re-render
  useEffect(() => {
    console.log("useEffect");
    window.addEventListener("resize", checkSize);

    //"cleanup", return function. Without it MEMORY LEAKS OCCUR
    return () => {
      console.log("cleanup");
      window.removeEventListener("resize", checkSize);
    };
    //empty dependency array could fix this useEffect repition without cleanup(), but not good practice.
  }, []);

  console.log("render");
  return (
    <>
      <h1>window</h1>
      <h2>{size} px</h2>
    </>
  );
};

export default UseEffectCleanup;
