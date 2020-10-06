import React from 'react';

const CalculatorKeys = (props) => {
  return(
    <div class="calculator-key">
      <button onClick={props.buttonClick} value="0" id="zero">0</button>
      <button onClick={props.buttonClick} value="1" id="one">1</button>
      <button onClick={props.buttonClick} value="2" id="two">2</button>
      <button onClick={props.buttonClick} value="3" id="three">3</button>
      <button onClick={props.buttonClick} value="4" id="four">4</button>
      <button onClick={props.buttonClick} value="5" id="five">5</button>
      <button onClick={props.buttonClick} value="6" id="six">6</button>
      <button onClick={props.buttonClick} value="7" id="seven">7</button>
      <button onClick={props.buttonClick} value="8" id="eight">8</button>
      <button onClick={props.buttonClick} value="9" id="nine">9</button>
      <button onClick={props.buttonClick} value="+" id="plus">+</button>
      <button onClick={props.buttonClick} value="-" id="minus">-</button>
      <button onClick={props.buttonClick} value="+/-" id="plusminus">+/-</button>
      <button onClick={props.buttonClick} value="*" id="multiply">*</button>
      <button onClick={props.buttonClick} value="/" id="divide">/</button>
      <button onClick={props.buttonClick} value="=" id="equal">=</button>
      <button onClick={props.buttonClick} value="ac" id="ac">AC</button>
      <button onClick={props.buttonClick} value="%" id="percent">%</button>
      <button onClick={props.buttonClick} value="." id="dot">.</button>
    </div>
  )
};

export default CalculatorKeys