import React from "react";
import Radium from 'radium';
import "./Car.scss";

const Car = (props) => {
  const inputClasses = ['input'];

  if(props.carName !== '') {
    inputClasses.push('green');
  } else {
    inputClasses.push('red');
  }

  if (props.carName.length > 4) {
    inputClasses.push('bold');
  }

  const style= {
    border: "1px solid #ccc",
    boxShadow: "0 4px 5px 0 rgba(0, 0, 0, .14)",
    ":hover": {
      border: "1px solid #aaa",
      boxShadow: "0 4px 15px 0 rgba(0, 0, 0, .25)",
      cursor: "pointer"
    }
  }

  return (
    <div className="Car" style={style}>
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

export default Radium(Car);
