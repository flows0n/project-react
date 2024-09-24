import { useState } from "react"

function Iterator() {

    const [number, setNumber] = useState(2)
    const [isShow, setIsShow] = useState(false)

    function handleButton() {
        setNumber(prev => prev + 1)
    }

    return <div>
        <button onClick={handleButton}>Naciśnij mnie</button>
        <p>Wartość state'a: {number}</p>
    </div>

}

export default Iterator