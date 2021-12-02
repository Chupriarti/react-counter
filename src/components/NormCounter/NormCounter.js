import React from 'react'
import './normCounter.css';
import Header from '../Header/Header';
import CountView from '../CountView/CountView';
import CounterButton from '../CounterButton/CounterButton';  

export const NormCounter = () => {
    const [a, setA] = React.useState(null);
    const [b, setB] = React.useState(null);
    const [currentPart, setCurrentPart] = React.useState(0);
    const [op, setOp] = React.useState(null);
    return (
      <div className="normCounter">
        <Header title = "React Norm Counter" />
        <CountView count={a + b} />
        <CounterButton title="1" />
        <CounterButton title="2" />
        <CounterButton title="3" />
        <CounterButton title="4" />
        <CounterButton title="5" />
        <CounterButton title="6" />
        <CounterButton title="7" />
        <CounterButton title="8" />
        <CounterButton title="9" />
        <CounterButton title="0" />
        <CounterButton title="+" />
        <CounterButton title="-" />
        <CounterButton title="*" />
        <CounterButton title="/" />
        <CounterButton title="=" />
      </div>
    )
}

export default NormCounter