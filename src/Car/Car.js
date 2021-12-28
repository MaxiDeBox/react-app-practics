import React from "react";
import "./Car.scss";
import withClass from '../hoc/withClass';

class Car extends React.Component {

  render() {
    const inputClasses = ['input'];

    if(this.props.carName !== '') {
      inputClasses.push('green');
    } else {
      inputClasses.push('red');
    }

    if (this.props.carName.length > 4) {
      inputClasses.push('bold');
    }

    return (
      <React.Fragment>
        <h3>Car name: {this.props.carName}</h3>
        <p>Year: <strong>{this.props.carYear}</strong></p>
        <input
          type="text"
          onChange={this.props.onChangeName}
          value={this.props.carName}
          className={inputClasses.join(' ')}
        />
        <button onClick={this.props.onDelete}>Delete</button>
      </React.Fragment>
    );
  }
}

export default withClass(Car, "Car");
