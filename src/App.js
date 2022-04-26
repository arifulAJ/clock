
import './App.css';
import Watch from './component/Watch';

function App() {
  return (
    <div className="App">
      <h1> The World local time watch</h1>
      <Watch local="bn-BD" locals="en-ES"/>
    </div>
  );
}

export default App;
