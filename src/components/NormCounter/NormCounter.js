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
        <table>
          <tr>
            <td><CounterButton title="1" /></td>
            <td><CounterButton title="2" /></td>
            <td><CounterButton title="3" /></td>
          </tr>
          <tr>
            <td><CounterButton title="4" /></td>
            <td><CounterButton title="5" /></td>
            <td><CounterButton title="6" /></td>
          </tr>
          <tr>
            <td><CounterButton title="7" /></td>
            <td><CounterButton title="8" /></td>
            <td><CounterButton title="9" /></td>
          </tr>
          <tr>
            <td><CounterButton title="+" /></td>
            <td><CounterButton title="0" /></td>
            <td><CounterButton title="=" /></td>
          </tr>
        </table>
      </div>
    )
}

export default NormCounter