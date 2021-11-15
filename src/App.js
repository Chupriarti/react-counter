import React from 'react'
import './App.css';
import CounterButton from './components/CounterButton/CounterButton';
import CountView from './components/CountView/CountView';
import Header from './components/Header/Header';

function App() {
  const [count, setCount] = React.useState(0);
  return (
    <div className="App">
      <CountView count={count} />
      <Header title = "React Counter" />
      <CounterButton callback={() => setCount(count + 1)} title="Count ++" />
      <CounterButton callback={() => setCount(count - 1)} title="Count --" />
      <CounterButton callback={() => setCount(count * count)} title="Count **" />
      <CounterButton callback={() => setCount(count / count)} title="Count //" />
    </div>
  );
}

export default App;
