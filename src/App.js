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

  const changeTitleHandler = () => {
    const oldTitle = state.pageTitle;
    const newTitle = oldTitle + ' (changed!)';

    console.log(oldTitle);

    setState({
      ...state,
      pageTitle: newTitle
    });
  };

  return (
    <div style={divStyle}>
      <h1>{state.pageTitle}</h1>

      <button onClick={changeTitleHandler}>change title</button>

      <Car carName={cars[0].name} carYear={cars[0].year} />
      <Car carName={cars[1].name} carYear={cars[1].year} />
      <Car carName={cars[2].name} carYear={cars[2].year} />
    </div>
  );
}

export default App;
