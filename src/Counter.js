import { useState } from "react";
import './Counter.css';

function Counter() {
    const [count, setCount] = useState(1)
    
    function incr(){
        setCount(
            function(oldCount){
                return oldCount + 1
            }
        )
        console.log(count)
    }

    function reset(){
        setCount(
            function(oldCount){
                return oldCount = 1
            }
        )
    }

    return (
      <div className="App">
     <h2>Counter</h2>
     <p>Counter is at {count}</p>
     <button onClick={incr}>Click to add 1 to Counter</button>
     <button onClick={reset}>Click to reset the Counter</button>
      </div>
    );
  }
  
  export default Counter;