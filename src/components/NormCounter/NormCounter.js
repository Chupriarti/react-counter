import React from 'react'
import './normCounter.css';
import Header from '../Header/Header';
import CountView from '../CountView/CountView';


export const NormCounter = () => {
    const [a, setA] = React.useState(null);
    const [b, setB] = React.useState(null);
    const [currentPart, setCurrentPart] = React.useState(0);
    return (
      <div className="normCounter">
        <Header title = "React Norm Counter" />
        <CountView count={a + b} />
      </div>
    )
}

export default NormCounter