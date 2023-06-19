import logo from './logo.svg';
import './App.css';
import Card from './card';

function App() {
  return (
    <div className="App">
      <input type="text"
      placeholder="Enter your task here..."
      className="input"/>
    <Card text="Clean up bedroom"/>
    <Card text="Buy some milk"/>
    <Card text="Jogging"/>
    <Card text="Learn React"/>
    <Card text="Doing Exercises"/>
    <div className="App1">
      <p className="todolist">5 tasks left!</p>
      <p className="MindX">Mindx Todolist</p>
      </div>
    
      </div>
  );
}

export default App;
