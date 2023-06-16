import React, {useRef} from "react";
import Button from './Button'

const UseImperativeHandleHook = () => {
   const buttonRef = useRef()
    return (
        <div style={{ justifyContent: 'center', marginTop: 40 }}>
            <button onClick={() => buttonRef.current.changeToggleValue()} >Button from Parent </button>
            <Button ref={buttonRef}/>
        </div >
    )
}

export default UseImperativeHandleHook