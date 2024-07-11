

// useEffect() = React hook that tells react to do some side code, but you can control when:
//               a. component re-renders
//               b. component mounts
//               c. component mounts or value changes

// useEffect(function, [dependencies])

// 1. useEffect(() => {})           // runs after every re-render
// 2. useEffect(() => {}, [])       // runs only on mount
// 3. useEffect(() => {}, [value])  // runs on mount and when value changes

// USES:
// #1 Event listeners
// #2 DOM manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetching data from an API
// #5 Clean up when a component unmounts

import React, { useState, useEffect } from 'react';
function Effect(){

    const [count, setCount] = useState(0);
    const [color, setColor] = useState('green')

    /*
    useEffect(() => {
        document.title = `Count: ${count} ${color}`;
    });
    */
    
    // changes title after every re-render (color or count change)

    /*
    useEffect(() => {
        document.title = `Count: ${count} ${color}`;

        return () => {
            // Optional clean up code
        }
    }, [color]);
    */
    
    // changes title only when color changes
    
    
    useEffect(() => {
        document.title = `My Counter Program ${count}`;
    }, []);
    
    
    // changes title only on mount

    // document.title = `Count: ${count} ${color}`; // can't control when the code updates


    function addCount(){
        setCount(c => c + 1);
    }

    function subtractCount(){
        setCount(c => c - 1);
    }

    function changeColor(){
        if (color === 'green') {
            setColor('red')
        }
        else {
            setColor('green')
        }
    }

    return(<>
        <p style={{color: color}}>Count: {count}</p>
        <button onClick={addCount}>+</button>
        <button onClick={subtractCount}>-</button>
        <button onClick={changeColor}>change color</button>
    </>);
}

export default Effect