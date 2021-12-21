import React from "react";
import "./Car.css";

export default (props) => {
  const inputClasses = ['input'];

  if(props.carName !== '') {
    inputClasses.push('green');
  } else {
    inputClasses.push('red');
  }

  if (props.carName.length > 4) {
    inputClasses.push('bold');
  }

  return (
    <div className="Car">
      <h3>Car name: {props.carName}</h3>
      <p>Year: <strong>{props.carYear}</strong></p>
      <input
        type="text"
        onChange={props.onChangeName}
        value={props.carName}
        className={inputClasses.join(' ')}
      />
      <button onClick={props.onDelete}>Delete</button>
    </div>
  );
}
