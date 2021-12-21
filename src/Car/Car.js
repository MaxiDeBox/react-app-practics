import React from "react";

export default (props) => (

  <div style={
    {
      border: "1px solid #ccc",
      marginBottom: "10px",
      padding: "10px",
      boxShadow: "0 4px 5px 0 rgba(0, 0, 0, .14)",
      borderRadius: "5px"
    }
  }>
    <h3>Car name: {props.carName}</h3>
    <p>Year: <strong>{props.carYear}</strong></p>
    <input type="text" onChange={props.onChangeName} value={props.carName} />
    <button onClick={props.onDelete}>Delete</button>
  </div>
);
