import React from "react";

const ErrorExample = () => {
  let title = "random title";
  const handleClick = () => {
    console.log(title);
    //Wont change title, there isn't anyway to render it on the page. Instead changes console.log(title) call
    // Need to use "useState" to render title change call
    title = "hello people";
  };
  return (
    //create a react fragment, for an array
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
