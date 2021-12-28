import React from "react";
import "./Car.scss";
import withClass from '../hoc/withClass';
import PropTypes from "prop-types";

class Car extends React.Component {

  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  componentDidMount() {
    if(this.props.index === 0) {
      this.inputRef.current.focus();
    }
  }

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
          ref={this.inputRef}
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

Car.propTypes = {
  index: PropTypes.number,
  carName: PropTypes.string,
  carYear: PropTypes.number,
  onDelete: PropTypes.func,
  onChangeName: PropTypes.func
}

export default withClass(Car, "Car");
