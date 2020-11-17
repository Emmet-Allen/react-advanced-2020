import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  //can either import React, or React.useState()
  //set up a default and a setState
  // useState.(data) will use the values in data to change state
  const [people, setPeople] = React.useState(data);

  //pass in "id"
  const removeItem = (id) => {
    //Filter out array of an id
    let newPeople = people.filter((person) => person.id !== id);
    //setPeople(newPeople) will remove that name from the array
    setPeople(newPeople);
  };
  return (
    <>
      {/* map over the in the array where the values for person is taken from the "id" and "name" values in the data array */}
      {people.map((person) => {
        const { id, name } = person;
        return (
          // use the "id" as a key value for the component
          <div key={id} className="item">
            {/* have name be rendered for each indiviudal id */}
            <h4>{name}</h4>
            {/* to be able to remove an item we need to ensure id is passed and defined */}
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {/* to clear out the array, set an onClick event to an arrow function which creates an empty array of setPeople */}
      <button className="btn" onClick={() => setPeople([])}>
        clear items
      </button>
    </>
  );
};

export default UseStateArray;
