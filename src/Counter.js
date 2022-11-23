import { useState } from "react";
import './Counter.css';

function Counter() {
    const [count, setCount] = useState(1)
    const [delta, setDelta] = useState(1)

    function incr(){
        setCount(
            function(oldCount){
                return oldCount + delta
            }
        )
        console.log(count)
    }

    function reset(){
        setCount(1)
    }

    function handleDelta(e){
        console.log(e);
        setDelta(Number(e.target.value))
    }
    return (
      <div className="App">
     <h2>Counter</h2>
     <input type= "number" value = {delta} onChange = {handleDelta}/>
     <p>Counter is at {count}</p>
     <button onClick={incr}>Click to add {delta} to Counter</button>
     <button onClick={reset}>Click to reset the Counter</button>
      </div>
    );
  }
  
  export default Counter;