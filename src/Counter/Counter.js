import React from "react";
import Auxiliary from "../hoc/Auxiliary";
import Counter2 from "../Counter2/Counter2";

export default class Counter extends React.Component {
  state = {
    counter: 0
  };

  addCounter = () => {
    // this.setState({
    //   counter: this.state.counter + 1
    // });

    // Правильное изменение State
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1
      }
    });
  }

  render() {
    // Variant 3 Fragment используя свой фрагмент
    return (
      <Auxiliary>
        <h2>Counter {this.state.counter}</h2>
        <Counter2 />
        <button onClick={this.addCounter}>+</button>
        <button onClick={() => this.setState({counter: this.state.counter - 1})}>-</button>
      </Auxiliary>
    );

    // Variant 2 Fragment
    // return (
    //   <React.Fragment>
    //     <h2>Counter {this.state.counter}</h2>
    //     <button onClick={this.addCounter}>+</button>
    //     <button onClick={() => this.setState({counter: this.state.counter - 1})}>-</button>
    //   </React.Fragment>
    // );

    // Variant 1
    // return [
    //     <h2 key={1}>Counter {this.state.counter}</h2>,
    //     <button key={2} onClick={this.addCounter}>+</button>,
    //     <button key={3} onClick={() => this.setState({counter: this.state.counter - 1})}>-</button>
    // ];
  }
}
