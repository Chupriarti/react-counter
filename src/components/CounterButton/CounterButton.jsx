import React from 'react'
import './counterButton.css';

const CounterButton = (props) => {
    return (
        <button className="btn" onClick = {props.callback} >{props.title}</button>
    )
}

export default CounterButton