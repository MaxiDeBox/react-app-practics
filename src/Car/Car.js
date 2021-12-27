import React from "react";
// import Radium from 'radium';
import "./Car.scss";

class Car extends React.Component {
  // Жизненный цикл изменения
  componentWillReceiveProps(nextProps) {
    console.log("Car componentWillReceiveProps", nextProps);
  }

  // Deprecated
  shouldComponentUpdate(nextProps, nextState) {
    console.log("Car shouldComponentUpdate", nextProps, nextState);
    return nextProps.carName.trim() !== this.props.carName.trim();
  }

  // Deprecated
  componentWillUpdate(nextProps, nextState) {
    console.log("Car componentWillUpdate", nextProps, nextState);
  }

  // Жизненные циклы React 16.3+
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("Car getDerivedStateFromProps", nextProps, prevState);

    return prevState;
  }

  componentDidUpdate() {
    console.log("Car componentDidUpdate");
  }

  // Жизненные циклы React 16.3+
  getSnapshotBeforeUpdate() {
    console.log("Car getSnapshotBeforeUpdate");
  }

  // Жизненный цикл удаления
  componentWillUnmount() {
    console.log("Car componentWillUnmount");
  }

  render() {
    console.log("Car render");
    // if (Math.random() > 0.7) {
    //   throw new Error("Car random failed");
    // }
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
