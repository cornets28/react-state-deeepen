import React, { useRef } from "react";

const UseRefHook = () => {
    // const [state, dispatch] = useReducer(reducerFunc, { counterBy4: 0, showText: true })
    const inputRef = useRef()
    const handleInputRef = () => {
        // focus on input
        inputRef.current.focus()
        // clear input
        inputRef.current.value = ""
    }


    return (
        <div style={{ display: "flex", justifyContent: 'center', marginTop: 40 }}>
            <input ref={inputRef} />
            <button onClick={handleInputRef}>Click me </button>
        </div >
    )
}

export default UseRefHook