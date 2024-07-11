import React, { useState } from 'react'

function EventHandler(){

    const [name, setname] = useState('Guest')
    const [quantity, setQuantity] = useState(0)
    const [comment, setComment] = useState('')
    const [fruit, setFruit] = useState('')
    const [satisfaction, setSatisfaction] = useState("")

    function handleNameChange(event: any){
        setname(event.target.value)
    }

    function handleQuantityChange(event: any){
        setQuantity(event.target.value)
    }

    function handleCommentChange(event: any){
        setComment(event.target.value)
    }

    function handleFruitChange(event: any){
        setFruit(event.target.value)
    }

    function handleSatisfactionChange(event: any){
        setSatisfaction(event.target.value)
    }

    return (<div>
                <p>Name: {name}</p>                
                <input value={name} onChange={handleNameChange}></input>

                <p>Quantity: {quantity}</p>
                <input value={quantity} onChange={handleQuantityChange} type="number"></input>

                <p>Comments:</p>
                <textarea value={comment} onChange={handleCommentChange} placeholder="leave comments here"></textarea>

                <p>Selected fruit: {fruit}</p>
                <select value={fruit} onChange={handleFruitChange}>
                    <option value="">Select an option</option>
                    <option value="Apple">Apple</option>
                    <option value="Banana">Banana</option>
                    <option value="Orange">Orange</option>
                </select>

                <p>Satisfied: {satisfaction}</p>
                <label>
                    <input type="radio" value="Yes" checked={satisfaction === "Yes"} onChange={handleSatisfactionChange}></input>
                    Yes
                </label>
                <label>
                    <input type="radio" value="No" checked={satisfaction === "No"} onChange={handleSatisfactionChange}></input>
                    No
                </label>
                
                
            </div>)
}

export default EventHandler