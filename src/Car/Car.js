import React from "react";
import "./Car.css";

export default (props) => (

  <div className="Car">
    <h3>Car name: {props.carName}</h3>
    <p>Year: <strong>{props.carYear}</strong></p>
    <input type="text" onChange={props.onChangeName} value={props.carName} />
    <button onClick={props.onDelete}>Delete</button>
  </div>
);
