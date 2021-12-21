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

  // const changeTitleHandler = (newTitle) => {
  //   setState({
  //     ...state,
  //     pageTitle: newTitle,
  //   });
  // };

  const onChangeName = (name, i) => {
    const car = state.cars[i];
    car.name = name;
    const cars = [...state.cars];
    cars[i] = car;

    setState({
      ...state,
      cars
    });
  };

  const deleteHandler = (i) => {
    const cars = state.cars.concat();
    cars.splice(i, 1);

    setState({
      ...state,
      cars
    })
  }

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
          onDelete={() => deleteHandler(i)}
          onChangeName={(event) => onChangeName(event.target.value, i)}
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

      <div style={{
        width: '400px',
        margin: 'auto',
        paddingTop: '20px'
      }}>
        { cars }
      </div>
    </div>
  );
}

export default App;

