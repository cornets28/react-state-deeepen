import React, { useState, forwardRef, useImperativeHandle } from "react";



const Button = forwardRef((props, ref) => {
    const [toggle, setToggle] = useState(false);

    useImperativeHandle(ref, () => ({
        changeToggleValue() {
            setToggle(!toggle)
        }
    }))

    return (
        <div style={{ justifyContent: 'center', marginTop: 40 }}>
            <button>Button from Child </button>
            {toggle && <p>Toggle</p>}
        </div >
    )
})

export default Button