import './App.css';
import Mensaje from './Mensaje';

function App() {
  return (
    <div className="App">
      <h1>Components:</h1>
      <Mensaje color='red' message='Primer'/>
      <Mensaje color='blue' message='Segundo'/>
      <Mensaje color='green' message='Tercero'/>
    </div>
  );
}

export default App;
