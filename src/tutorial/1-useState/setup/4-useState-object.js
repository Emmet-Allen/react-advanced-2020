import React, { useState } from "react";

//Honeslty, its easier to change multiple values via object, then the hard-useState way but know both.

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    message: "random message",
  });
  console.log(person);

  const [name, setName] = useState("Peter");
  const [age, setAge] = useState("24");
  const [message, setMessage] = useState("Random Message");

  //Function changeMessage
  const changeMessage = () => {
    //sets the state of the person message by using the spread operator and redefining the message
    setPerson({ ...person, message: "hello world" });
    // If state is hard set with a value
    // setMessage("hello world");
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
