import React from 'react'
import './simpleCounter.css';
import CounterButton from '../CounterButton/CounterButton';
import CountView from '../CountView/CountView';
import Header from '../Header/Header';

export const SimpleCounter = () => {
    const [count, setCount] = React.useState(0);
    return (
      <div className="simpleCounter">
        <Header title = "React Simple Counter" />
        <CountView count={count} />
        <CounterButton onClick={() => setCount(count + 1)} title="Count ++" />
        <CounterButton onClick={() => setCount(count - 1)} title="Count --" />
        <CounterButton onClick={() => setCount(count * count)} title="Count **" />
        <CounterButton onClick={() => setCount(0)} title="Reset Count" />
      </div>
    )
}

export default SimpleCounter