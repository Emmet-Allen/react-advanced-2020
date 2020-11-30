import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  //seprate async function
  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    //if you have some kind of functionality, within the function, if you are triggering re-render make sure to add empty dependency array
    //IF YOU FAIL TO DO ABOVE YOU WILL INFINITE LOOP AND CRASH BROWSER
    setUsers(users);
  };
  //browser will crash. Loop b/w setUser and getUser re-rendering, make sure to add getUsers to "useEffect", with an empty dependency array to stop re-rendering
  //console.log(users);

  //You CANNOT make async.await, because it cant return a promise. useEffect is looking for "cleanup", not the "promise"
  useEffect(() => {
    //instead use "useEffect" and an empty dependency array
    getUsers();
  }, []);

  return (
    <>
      <h3>Github Users</h3>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
