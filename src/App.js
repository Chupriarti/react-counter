import React from 'react'
import './App.css';

function App() {
  const [count, setCount] = React.useState(0);
  return (
    <div className="App">
      <h1>React Counter</h1>
      <h2>{count}</h2>
    </div>
  );
}

export default App;
