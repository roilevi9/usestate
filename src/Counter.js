import { useState , useEffect} from "react";
//import './Counter.css';

function Counter(props) {
    const [count, setCount] = useState(1)
    const {delta, maxNum, getReset, needToReset} = props

    useEffect(()=>{
        if(needToReset){
            setCount(1)
            getReset(false)
        }
    },[needToReset, getReset])

    function incr(){
        
        setCount(
            function(oldCount){
                if ((oldCount + delta) > maxNum){
                    return 1;
                }
                else{ return oldCount + delta
                }
            }
        )
    }

    function reset(){
        getReset(true)
        //setCount(1)
    }

    return (
      <div className="App">
     <h2>Counter</h2>
     <p>Counter is at {count}</p>
     <button onClick={incr}>Click to add {delta} to Counter</button>
     <button onClick={reset}>Click to reset the Counter</button>
      </div>
    );
  }
  
  export default Counter;