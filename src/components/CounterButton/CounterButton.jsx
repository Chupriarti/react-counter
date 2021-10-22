import React from 'react'
import './counterButton.css';

const CounterButton = (props) => {
    return (
        <div>
            <button className="btn" onClick = {props.callback} >{props.title}</button>
        </div>
    )
}

export default CounterButton