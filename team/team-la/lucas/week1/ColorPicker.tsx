import React, { useState } from 'react'

function ColorPicker(){

    const [color, setColor] = useState("#000000");

    function handleColorChange(event: any){
        setColor(event.target.value)
    }

    return (<div className="color-picker-container">
                <h2>Color Picker</h2>
                    <div className="color-display" style={{backgroundColor: color}}>
                        <p>Selected color: {color}</p>
                    </div>
                    <label>Select a color</label>
                    <input type="color" value={color} onChange={handleColorChange}></input>
            </div>)
}

export default ColorPicker