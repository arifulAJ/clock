
import './App.css';
import Watch from './component/Watch';

function App() {
  console.log("app component render");
  return (
    <div className="App">
      <h1> The World local time watch</h1>
      <Watch/>
    </div>
  );
}

export default App;
