import React, { useState } from 'react';
import Display from './components/Display';
import CalculatorKeys from './components/CalculatorKeys';
import './styles.css'

const App = () => {
  const [value, setValue] = useState(0)
  const [memory, setMemory] = useState(null)
  const [operator, setOperator] = useState(null)

  const buttonClick = (event) => {
    const num = parseFloat(value)
    if(event.target.value === "ac"){
      setValue(0)
      setMemory(null)
      setOperator(null)
      return
    }

    if(event.target.value === "+/-"){
      setValue(num * -1)
    }

    if(event.target.value === "%"){
      setMemory(null)
      setOperator(null)
      setValue(num / 100)
      return
    }

    if(event.target.value === "+"){
      setMemory(parseFloat(value))
      setValue(0)
      setOperator("+")
      return
    }
    if(event.target.value === "-"){
      setMemory(parseFloat(value))
      setValue(0)
      setOperator("-")
      return
    }
    if(event.target.value === "*"){
      setMemory(parseFloat(value))
      setValue(0)
      setOperator("*")
      return
    }
    if(event.target.value === "/"){
      setMemory(parseFloat(value))
      setValue(0)
      setOperator("/")
      return
    }

    if(event.target.value === "="){
      if(!operator) return;

      if(operator === "+"){
        setValue(memory + parseFloat(value))
      }

      if(operator === "-"){
        setValue(memory - parseFloat(value))
      }

      if(operator === "*"){
        setValue(memory * parseFloat(value))
      }

      if(operator === "/"){
        setValue(memory / parseFloat(value))
      }

      setMemory(null)
      setOperator(null)
      return;
    }

    if (event.target.value === '+/-'){
      setValue(num * -1)
      return;
    }

    if (event.target.value === '.'){
      if(value.includes(".")) return;
      setValue(value + '.')
      return;
    }

    if(value[value.length - 1] === '.'){
      setValue(value + event.target.value)
    } else {
      setValue(parseFloat(num + event.target.value).toString())
    }
  
  };

  
  return (
    <div>
      <Display value={value}/>
      <CalculatorKeys buttonClick={buttonClick}/>
    </div>
  )
}

export default App