import React, { useState } from 'react'

const Display = (props) => {
  // console.log(props)
  return (
    <div>
      {props.counter}
    </div>
  )
}

const NumberCalculatorKeys = (props) => {
  return(
    <div>
      <button onClick={props.numberClick} value="0">0</button>
      <button onClick={props.numberClick} value="1">1</button>
      <button onClick={props.numberClick} value="2">2</button>
      <button onClick={props.numberClick} value="3">3</button>
      <button onClick={props.numberClick} value="4">4</button>
      <button onClick={props.numberClick} value="5">5</button>
      <button onClick={props.numberClick} value="6">6</button>
      <button onClick={props.numberClick} value="7">7</button>
      <button onClick={props.numberClick} value="8">8</button>
      <button onClick={props.numberClick} value="9">9</button>
      <button onClick={props.numberClick} value="+">+</button>
      <button onClick={props.numberClick} value="-">-</button>
      <button onClick={props.numberClick} value="*">*</button>
      <button onClick={props.numberClick} value="/">/</button>
      <button onClick={props.numberClick} value="=">=</button>
      <button onClick={props.numberClick} value="ac">AC</button>
      <button onClick={props.numberClick} value="%">%</button>
      <button onClick={props.numberClick} value=".">.</button>
    </div>
  )
}

const App = () => {
  const [counter, setCounter] = useState(0)
  const [memory, setMemory] = useState(null)
  const [operator, setOperator] = useState(null)

  const numberClick = (event) => {
    const num = parseFloat(counter)
    if(event.target.value === "ac"){
      setCounter(0)
      setMemory(null)
      setOperator(null)
      return
    }

    if(event.target.value === "-"){
      setCounter(num * -1)
    }

    if(event.target.value === "%"){
      setMemory(null)
      setOperator(null)
      setCounter(num / 100)
      return
    }

    if(event.target.value === "+"){
      setMemory(parseFloat(counter))
      setCounter(0)
      setOperator("+")
      return
    }
    if(event.target.value === "-"){
      setMemory(parseFloat(counter))
      setCounter(0)
      setOperator("-")
      return
    }
    if(event.target.value === "*"){
      setMemory(parseFloat(counter))
      setCounter(0)
      setOperator("*")
      return
    }
    if(event.target.value === "/"){
      setMemory(parseFloat(counter))
      setCounter(0)
      setOperator("/")
      return
    }

    if(event.target.value === "="){
      if(!operator) return;

      if(operator === "+"){
        setCounter(memory + parseFloat(counter))
      }

      if(operator === "-"){
        setCounter(memory - parseFloat(counter))
      }

      if(operator === "*"){
        setCounter(memory * parseFloat(counter))
      }

      if(operator === "/"){
        setCounter(memory / parseFloat(counter))
      }

      setMemory(null)
      setOperator(null)
      return;
    }

    if (event.target.value === '.'){
      if(counter.includes(".")) return;
      setCounter(counter + '.')
      return;
    }

    if(counter[counter.length - 1] === '.'){
      setCounter(counter + event.target.value)
    } else {
      setCounter(parseFloat(num + event.target.value).toString())
    }
  
  };

  
  return (
    <div>
      <Display counter={counter}/>
      <NumberCalculatorKeys numberClick={numberClick}/>
    </div>
  )
}

export default App