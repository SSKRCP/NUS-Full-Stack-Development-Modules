import React, { useState } from "react"
import '../App.css'

function MessageButton(props){
    const[showMessage, setShowMessage]=useState(false)

    const handleToggleMessage = () =>{
        setShowMessage(!showMessage)
    }

    return(
        <div>
            <button title="Toggle Message" 
                className="button"
                onClick={handleToggleMessage}>
                    Toggle Message
            </button>
            
            {showMessage && <h3>Hello {props.name}, welcome to React!</h3>}
        </div>
        
    );     

}

export default MessageButton