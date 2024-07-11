import React, { useState } from 'react'

function FruitUpdater(){
    const [foods, setFoods] = useState(['Apple'])

    function handleAddFood(){
        const newFoodInput = document.getElementById('foodInput') as HTMLInputElement
        if (newFoodInput){
            const newFood = newFoodInput.value
            setFoods(f => [...f, newFood])
            newFoodInput.value = ''
        }
    }

    function handleRemoveFood(index:number){

        setFoods(foods.filter((_, i) => i !== index))
    }

    return (<div>
                <h3>List of Foods</h3>
                <ul>
                    {foods.map((foods:string, index:number) => (
                        <li key={index} onClick={() => handleRemoveFood(index)}>
                            {foods}
                        </li>))}
                </ul>
                <input type="text" id="foodInput" placeholder="Enter food name"></input>
                <button onClick={handleAddFood}>Add Food</button>
            </div>)
}
export default FruitUpdater