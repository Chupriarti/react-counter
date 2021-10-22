import React from 'react'
import './App.css';
import CounterButton from './components/CounterButton/CounterButton';
import Header from './components/Header/Header';

function App() {
  const [count, setCount] = React.useState(0);
  return (
    <div className="App">
      <Header title = "React Counter" />
      <div>
        <h2>{count}</h2>
      </div>
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
