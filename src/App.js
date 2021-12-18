import './App.css';
import Car from './Car/Car';
import React, {Component, useState} from 'react';

function App() {
  const [state, setState] = useState({
    cars: [
      {name: 'Ford', year: 2018},
      {name: 'BMW', year: 2020},
      {name: 'Mazda 1', year: 2016},
    ],
    pageTitle: 'React component'
  });

  const divStyle = {
    textAlign: 'center',
  }

  const cars = state.cars;

  const changeTitleHandler = (newTitle) => {
    setState({
      ...state,
      pageTitle: newTitle
    });
  };

  const handleInput = (event) => {
    setState({
      ...state,
      pageTitle: event.target.value
    });
  };

  return (
    <div style={divStyle}>
      <h1>{state.pageTitle}</h1>

      <input type="text" onChange={handleInput} />

      <button
        onClick={changeTitleHandler.bind(changeTitleHandler, 'Changed!')}
      >
        change title
      </button>

      <Car
        carName={cars[0].name}
        carYear={cars[0].year}
        onChangeTitle={changeTitleHandler.bind(changeTitleHandler, cars[0].name)}
      />
      <Car
        carName={cars[1].name}
        carYear={cars[1].year}
        onChangeTitle={() => changeTitleHandler(cars[1].name)}
      />
      <Car
        carName={cars[2].name}
        carYear={cars[2].year}
        onChangeTitle={() => changeTitleHandler(cars[2].name)}
      />
    </div>
  );
}

export default App;
