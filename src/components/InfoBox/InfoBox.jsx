import React from "react"

export const InfoBox = ({name}) =>{

    if(!name) {
        return <p>Nie podano imienia!</p>
    }else{
        return <p>Nazywam się {name}!</p>
    }
}


