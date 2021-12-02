import './App.css';
import Car from './Car/Car';

function App() {
  const divStyle ={
    textAlign: 'center',
  }

  return (
    <div style={divStyle}>
      <h1>Hello React!</h1>
      <Car />
    </div>
  );
}

export default App;
