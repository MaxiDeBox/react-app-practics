import './App.css';
import Car from './Car/Car';

function App() {
  const divStyle = {
    textAlign: 'center',
  }

  return (
    <div style={divStyle}>
      <h1>Hello React</h1>
      <Car carName={'Ford'} carYear={2018} />
    </div>
  );
}

export default App;
