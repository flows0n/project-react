import React from "react"

const Button = () =>{

    const handleClick = () =>{
        console.log("Przycisk został kliknięty")
    }

    return <div><button  onClick={handleClick}>Nacisnij mnie</button>
        </div>
}

export default Button