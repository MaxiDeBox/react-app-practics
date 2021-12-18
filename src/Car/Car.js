import React from "react";

export default (props) => (

  <div>
    <h3>Car name: {props.carName}</h3>
    <p>Year: <strong>{props.carYear}</strong></p>
    <button onClick={props.onChangeTitle}>Click</button>
  </div>
);
