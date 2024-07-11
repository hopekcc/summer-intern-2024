import React, { useState } from 'react'

function Counter(){

    const [count, setCount] = useState(0)

    const add = () => {
        setCount(prevCount => prevCount + 1) // updater function, better practice than setter function
    }

    const subtract = () => {
        setCount(count - 1)
    }
    const reset = () => {
        setCount(0)
    }

    return(<div className="counter-container">
        <h2 className="count-display">Count: {count}</h2>
        <button className="count-button" onClick={subtract}>-</button>
        <button className="count-button" onClick={reset}>reset</button>
        <button className="count-button" onClick={add}>+</button>
    </div>)
}

export default Counter