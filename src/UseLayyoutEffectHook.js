import React, { useRef, useLayoutEffect, useEffect } from "react";

const UseLayoutEffectHook = () => {
    const inputRef = useRef()

    useEffect(() => {
        inputRef.current.value = "Show me secondly"
    })

    useLayoutEffect(() => {
        inputRef.current.value = "Show me firstly"
    })

    return (
        <div style={{ display: "flex", justifyContent: 'center', marginTop: 40 }}>
            <input ref={inputRef} value="Samuel" />
        </div >
    )
}

export default UseLayoutEffectHook