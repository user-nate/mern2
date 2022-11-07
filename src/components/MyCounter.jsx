import React, { useState } from "react"

const Counter = (props) => {
    console.log(props)

    const [countState, setCountState] = useState(0)

    function incCount(){
        setCountState(countState + props.incBy)
    }

    // just make an object for styles:
    const countStyle = {
        fontSize: "2em"
    }

    // function decCount(){
    //     setCountState(countState - props.decBy)
    // }
    return (
        <div>
            <div id='c' style={countStyle}>{countState}</div>
            <button onClick={incCount}>+{props.incBy}</button>
            {/* {props.decBy && <button onClick={decCount}>-{props.decBy}</button>} */}
        </div>
    )
}
export default Counter;
