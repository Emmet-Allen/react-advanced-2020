import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const reset = () => {
    setValue(0);
  };

  const complexIncrease = () => {
    setTimeout(() => {
      // setValue(value + 1);
      //setValue is asynchronus, because of the 'setTimeout' of 2sec
      setValue((prevState) => {
        //"prevState" is the primer for the async function
        return prevState + 1;
      });
    }, 2000);
  };

  const complexDecrease = () => {
    setTimeout(() => {
      setValue((prevState) => {
        return prevState - 1;
      });
    }, 2000);
  };

  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>Regular Counter</h2>
        <h1>{value}</h1>
      </section>
      {/* Inline function to increase value by 1 */}
      <button className="btn" onClick={() => setValue(value + 1)}>
        Increase Counter
      </button>
      {/* Inline function to decrease value by 1 */}
      <button className="btn" onClick={() => setValue(value - 1)}>
        Decrease Counter
      </button>
      {/* Reference function to reset value to 0 */}
      <button className="btn" onClick={() => reset()}>
        Reset Counter
      </button>

      <section style={{ margin: "4rem 0" }}>
        <h2>More Complex Counter</h2>
        <h1>{value}</h1>
      </section>

      <button className="btn" onClick={complexIncrease}>
        Increase Later
      </button>

      <button className="btn" onClick={complexDecrease}>
        Decrease Later
      </button>

      <button className="btn" onClick={() => reset()}>
        Reset Counter
      </button>
    </>
  );
};

export default UseStateCounter;
