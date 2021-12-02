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
            <td><CounterButton onClick={() => setA(1)} title="1" /></td>
            <td><CounterButton onClick={() => setA(2)} title="2" /></td>
            <td><CounterButton onClick={() => setA(3)} title="3" /></td>
          </tr>
          <tr>
            <td><CounterButton onClick={() => setA(4)} title="4" /></td>
            <td><CounterButton onClick={() => setA(5)} title="5" /></td>
            <td><CounterButton onClick={() => setA(6)} title="6" /></td>
          </tr>
          <tr>
            <td><CounterButton onClick={() => setB(7)} title="7" /></td>
            <td><CounterButton onClick={() => setB(8)} title="8" /></td>
            <td><CounterButton onClick={() => setB(9)} title="9" /></td>
          </tr>
          <tr>
            <td><CounterButton onClick={() => setOp("+")} title="+" /></td>
            <td><CounterButton onClick={() => setB(0)} title="0" /></td>
            <td><CounterButton title="=" /></td>
          </tr>
          <tr>
            <td><CounterButton onClick={() => setOp("-")} title="-" /></td>
            <td><CounterButton onClick={() => setOp("/")} title="/" /></td>
            <td><CounterButton onClick={() => setOp("*")} title="*" /></td>
          </tr>
        </table>
      </div>
    )
}

export default NormCounter