import React, { useReducer } from "react";


const reducerFunc = (state, action) => {
    switch (action.type) {
        case "INCREMENTBY4":
            return { counterBy4: state.counterBy4 + 4, showText: state.showText }
        case "toggleShowtext":
            return { counterBy4: state.counterBy4, showText: !state.showText }
        default:
            return state
    }
}

const UseReducerHook = () => {
    const [state, dispatch] = useReducer(reducerFunc, { counterBy4: 0, showText: true })

    return (
        <div style={{justifyContent: 'center' }}>
            <div style={{ display: "flex", justifyContent: 'center' }} >
            <button onClick={() => {
                dispatch({ type: "INCREMENTBY4" })
                dispatch({ type: "toggleShowtext" })
            }}

            >Implement by 4</button>
            </div>
          
            <h1>{state.counterBy4}</h1>
            <h1>
                {state.showText && <p>I am here</p>}
            </h1>

        </div>
    )
}

export default UseReducerHook