import './App.css';
import Counter from './Counter';
import { useState } from "react";



function App() {
  const [delta, setDelta] = useState(1)
  const [maxNum, setMaxNum] = useState(10)
  const [reset, setReset] = useState(false)
  const [maxValue, setMaxValue] = useState(1)

  function handleDelta(e){
  console.log(e);
  setDelta(Number(e.target.value))
}
  function handleMaxNum(m){
    setMaxNum(Number(m.target.value))
  }

  function getReset(data){
    console.log(data)
    setReset(data)
  }

  function getMax(data){
    console.log(data);
    if (data > maxValue)
    {
      setMaxValue(data); 
    } 
    else
    {
      setMaxValue(maxValue); 
    }
  
  
  }

  return (
    <div className="App">
    <h1>Usestate</h1>
    <h3>The maximum value {maxValue}</h3>
    <h3>The Max Num:</h3>
    <input type= "number" value = {maxNum} onChange = {handleMaxNum}/>

    <h3>Delta:</h3>
    <input type= "number" value = {delta} onChange = {handleDelta}/>
    <Counter delta = {delta} maxNum = {maxNum} getReset = {getReset} needToReset = {reset} getMax = {getMax}/>
    <Counter delta = {delta} maxNum = {maxNum} getReset = {getReset} needToReset = {reset} getMax = {getMax}/>
    </div>
  );
}

export default App;
