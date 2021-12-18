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
    pageTitle: 'React component',
    showCars: false
  });

  const divStyle = {
    textAlign: 'center',
  }

  const changeTitleHandler = (newTitle) => {
    setState({
      ...state,
      pageTitle: newTitle,
    });
  };

  const toggleCarsHandler = () => {
    setState({
      ...state,
      showCars: !state.showCars
    })
  }

  let cars = null;

  if (state.showCars) {
    cars = state.cars.map((item, i) => {
      return (
        <Car
          key={i}
          carName={item.name}
          carYear={item.year}
          onChangeTitle={() => changeTitleHandler(item.name)}
        />
      )
    })
  }

  return (
    <div style={divStyle}>
      <h1>{state.pageTitle}</h1>

      <button
        onClick={toggleCarsHandler}
      >
        Toggle cars
      </button>

      { cars }
    </div>
  );
}

export default App;
