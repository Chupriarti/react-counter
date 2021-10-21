import React from 'react'
import './App.css';
import CounterButton from './components/CounterButton/CounterButton';

function App() {
  const [count, setCount] = React.useState(0);
  return (
    <div className="App">
      <h1>React Counter</h1>
      <h2>{count}</h2>
      <CounterButton callback={() => setCount(count + 1)} title="Count ++" />
      <hr />
      <CounterButton callback={() => setCount(count - 1)} title="Count --" />
      <hr />
      <CounterButton callback={() => setCount(count * count)} title="Count **" />
      <hr />
      <CounterButton callback={() => setCount(count / count)} title="Count //" />
    </div>
  );
}

export default App;
