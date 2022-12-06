import { useState , useEffect} from "react";

function Counter(props) {
    const [count, setCount] = useState(1)
    const {delta, maxNum, getReset, needToReset, getMax} = props

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
                    getMax(oldCount);
                    return 1;
                }
                else{
                    getMax(oldCount + delta);
                    return oldCount + delta
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