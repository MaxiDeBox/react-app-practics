import './App.css';
import Car from './Car/Car';

function App() {
  const divStyle = {
    textAlign: 'center',
  }

  return (
    <div style={divStyle}>
      <h1>Hello React</h1>
      <Car carName={'Ford'} carYear={2018}>
        <p style={{color: 'blue'}}>COLOR</p>
      </Car>
      <Car carName={'BMW'} carYear={2020}>
        <p style={{color: 'red'}}>COLOR</p>
      </Car>
    </div>
  );
}

export default App;

