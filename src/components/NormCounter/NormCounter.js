import React from 'react'
import './normCounter.css';
import Header from '../Header/Header';
import CountView from '../CountView/CountView';
import CounterButton from '../CounterButton/CounterButton';  

const calculate = (a, b, op) => {
  switch (op){
    case "+":
      return a + b; 
    case "-":
      return a - b; 
    case "*":
      return a * b; 
    case "/":
      return a / b;
    default:
      return 0;
  }
} 

export const NormCounter = () => {
    const [a, setA] = React.useState("");
    const [b, setB] = React.useState("");
    const [currentPartA, setCurrentPartA] = React.useState(true);
    const [op, setOp] = React.useState("");

    const changeDigits = (digit) => {
      if (currentPartA){
        setA(prev => prev + digit)
      } else {
        setB(prev => prev + digit)
      }
    }

    const changeOperator = (oper) => {
      setOp(oper);
      setCurrentPartA(prev => !prev)
    }

    const showResult = () => {
      if (currentPartA) {
        return a;
      } else {
        return b;
      }
    }
    
    return (
      <div className="normCounter">
        <Header title = "React Norm Counter" />
        <CountView count={showResult()} />
        <table>
          <tbody>
            <tr>
              <td><CounterButton onClick={() => changeDigits("1")} title="1" /></td>
              <td><CounterButton onClick={() => changeDigits("2")} title="2" /></td>
              <td><CounterButton onClick={() => changeDigits("3")} title="3" /></td>
            </tr>
            <tr>
              <td><CounterButton onClick={() => changeDigits("4")} title="4" /></td>
              <td><CounterButton onClick={() => changeDigits("5")} title="5" /></td>
              <td><CounterButton onClick={() => changeDigits("6")} title="6" /></td>
            </tr>
            <tr>
              <td><CounterButton onClick={() => changeDigits("7")} title="7" /></td>
              <td><CounterButton onClick={() => changeDigits("8")} title="8" /></td>
              <td><CounterButton onClick={() => changeDigits("9")} title="9" /></td>
            </tr>
            <tr>
              <td><CounterButton onClick={() => changeOperator("+")} title="+" /></td>
              <td><CounterButton onClick={() => changeDigits("0")} title="0" /></td>
              <td><CounterButton title="=" /></td>
            </tr>
            <tr>
              <td><CounterButton onClick={() => changeOperator("-")} title="-" /></td>
              <td><CounterButton onClick={() => changeOperator("/")} title="/" /></td>
              <td><CounterButton onClick={() => changeOperator("*")} title="*" /></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
}

export default NormCounter