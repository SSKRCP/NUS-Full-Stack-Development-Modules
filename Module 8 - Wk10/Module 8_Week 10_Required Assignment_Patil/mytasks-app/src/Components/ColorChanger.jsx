import React, { useState } from "react";

function ColorChanger(){
    const [colorname, setColorname]=useState('')

    const ChangeColor = (e) => {
        setColorname(e.target.value)
    }

    const IsValidColor = () =>{
        const temp = new Option().style;
        temp.color=colorname;
        return temp.color !== '';
    }

    const isValid = IsValidColor();

    return( 
        <div style={{padding:'20px'}}>
            <div>
                <label title="Enter the background color for the box" 
                    htmlFor="txtColorName">
                    Enter the background color for the box:
                </label>
                <input type="text" id="txtColorName" className="textbox"
                    placeholder="Enter color name e.g. Red..." value={colorname}
                    onChange={ChangeColor}
                ></input> 
            </div>
            <div style={{width:'100px', height:'100px',
                border:'1px #000000 solid',
                backgroundColor: IsValidColor() ? colorname:'transparent'}}>
            </div>
            {isValid && colorname !== '' && (
                <p>
                    Background color is set to: {colorname}
                </p>
            )}
            {!isValid  && colorname !== '' &&(
                <p style={{color:'red'}}>
                    Invalid color! Please select a valid color.
                </p>
            )}
        </div> 
    );
}

export default ColorChanger