import React, { useState } from 'react'

function MyComponent(){

    const [name, setName] = useState('Guest')
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false)

    const updateName = () => {
        setName("Lucas")
    }

    const incrementAge = () => {
        setAge(age + 1)
    }

    const changeEmploymentStatus = () => {
        setIsEmployed(!isEmployed) 
    }

    return(
    <div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>

        <p>Age: {age}</p>
        <button onClick={incrementAge}>Set Age</button>

        <p>Employment Statues: {isEmployed? 'Yes' : 'No'}</p>
        <button onClick={changeEmploymentStatus}>Change Employment Status</button>
    </div>)
}

export default MyComponent
