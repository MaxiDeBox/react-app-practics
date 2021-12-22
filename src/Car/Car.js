import React from "react";
import Radium from 'radium';
import "./Car.scss";

class Car extends React.Component {
  // Жизненный цикл изменения
  componentWillReceiveProps(nextProps) {
    console.log("Car componentWillReceiveProps", nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Car shouldComponentUpdate", nextProps, nextState);
    return nextProps.carName.trim() !== this.props.carName.trim();
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("Car componentWillUpdate", nextProps, nextState);
  }

  componentDidUpdate() {
    console.log("Car componentDidUpdate");
  }

  render() {
    console.log("Car render");
    const inputClasses = ['input'];

    if(this.props.carName !== '') {
      inputClasses.push('green');
    } else {
      inputClasses.push('red');
    }

    if (this.props.carName.length > 4) {
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
        <h3>Car name: {this.props.carName}</h3>
        <p>Year: <strong>{this.props.carYear}</strong></p>
        <input
          type="text"
          onChange={this.props.onChangeName}
          value={this.props.carName}
          className={inputClasses.join(' ')}
        />
        <button onClick={this.props.onDelete}>Delete</button>
      </div>
    );
  }
}

// const Car = (props) => {
//   const inputClasses = ['input'];
//
//   if(props.carName !== '') {
//     inputClasses.push('green');
//   } else {
//     inputClasses.push('red');
//   }
//
//   if (props.carName.length > 4) {
//     inputClasses.push('bold');
//   }
//
//   const style= {
//     border: "1px solid #ccc",
//     boxShadow: "0 4px 5px 0 rgba(0, 0, 0, .14)",
//     ":hover": {
//       border: "1px solid #aaa",
//       boxShadow: "0 4px 15px 0 rgba(0, 0, 0, .25)",
//       cursor: "pointer"
//     }
//   }
//
//   return (
//     <div className="Car" style={style}>
//       <h3>Car name: {props.carName}</h3>
//       <p>Year: <strong>{props.carYear}</strong></p>
//       <input
//         type="text"
//         onChange={props.onChangeName}
//         value={props.carName}
//         className={inputClasses.join(' ')}
//       />
//       <button onClick={props.onDelete}>Delete</button>
//     </div>
//   );
// }

//export default Radium(Car);
export default Car;
