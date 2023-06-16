import React, {useContext} from "react";
import { AppContext } from "./UseContextHook";


const Login = () => {
    const {setUsername} = useContext(AppContext)
    return(
        <div style={{display: "flex", justifyContent: 'center'}}>
            <input onChange={(event) => setUsername(event.target.value) } />
        </div>
    )
}

export default Login