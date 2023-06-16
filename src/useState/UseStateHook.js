import React, {useState} from "react";


const UseStateHook = () => {
    const [counterBy4, setCounterBy4 ] = useState(0);

    const handleCounter = () => {
        setCounterBy4(counterBy4 + 4)
    }

    return(
        <div style={{display: "flex", justifyContent: 'center'}}>
            <button onClick={handleCounter}>Implement by 4</button>
            <h1>{counterBy4}</h1>
        </div>
    )
}

export default UseStateHook