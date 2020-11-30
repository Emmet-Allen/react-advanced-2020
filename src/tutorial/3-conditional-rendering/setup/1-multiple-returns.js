import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";

//Can be used for data fetching
//Looking to return based on condition
const MultipleReturns = () => {
  //Naming convention for multiple rendering [isX, setIsX]

  //"isLoading" state, that is displayed at inital render
  const [isLoading, setIsLoading] = useState(true);
  //"isError" state, that is displayed while error is true
  const [isError, setIsError] = useState(false);
  //"user" state, that is set to "default user"
  const [user, setUser] = useState("default user");

  useEffect(() => {
    //fetch url and get response 'resp' of json
    fetch(url)
      .then((resp) => {
        //checks if network response is good
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json();
        }
        //network response isn't good
        else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(resp.statusText);
        }
      })
      //then get the login data and set it to user, and set the login to "setUser"
      .then((user) => {
        const { login } = user;
        setUser(login);
        setIsLoading(false);
      })
      //Not catching 404 error, just network error
      .catch((error) => console.log(error));
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  // if loading, return "loading...", if condition is met.
  // Can be used to display login screens or whatever else.
  if (isError) {
    return (
      <div>
        <h2>Error...</h2>
      </div>
    );
  }

  //if condition is not met, it return "multiple returns"
  return (
    <div>
      <h2>{user}</h2>
    </div>
  );
};

export default MultipleReturns;
