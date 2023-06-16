import React, { useEffect, useState } from "react";
import axios from "axios";


const UseEffectook = () => {
    const [comments, setComments] = useState('');
    const [count, setCount] = useState(0)

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/comments")
            .then((response) => {
                setComments(response.data[0].email)
                console.log("Count me")

            })
            // the last line means: reload the data every time a count state has changed
    }, [count])

    const handleCount = () => {
        setCount(count + 1)
    }


    return (
        <div style={{ justifyContent: 'center' }}>
            <div style={{ display: "flex" }}>
                <h1>{comments}</h1>
            </div>

            <button onClick={handleCount}>
                Count
            </button>
            {count}


        </div>
    )
}

export default UseEffectook