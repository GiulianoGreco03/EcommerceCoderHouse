import { useState } from "react";
import "./Counter.css"

function Counter(){

    const [count, setCount] = useState(0);

    const addCounter = () =>{
        if(count < 9)
         setCount(count+1)
    } ;
    const minusCounter = () => {
        if(count > 0)
            setCount(count-1)
    };

    return(
        <div className="counter">
            <button className="button-default" onClick={minusCounter}>-</button>
            <label>{count}</label>
            <button className="button-default" onClick={addCounter}>+</button>
        </div>
    )
}

export default Counter;