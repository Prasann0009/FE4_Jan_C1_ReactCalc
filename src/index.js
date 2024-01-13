import React, { useState } from 'react';
import ReactDOM from "react-dom";
import "./style.css"


const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleInputChange = (e, setNum) => {
    const value = e.target.value;
    setNum(value);
  };

  const validateInput = () => {
     if(!num1)
     {
        setError('NUM1 Cannot Be Empty');
        return false;
     }
     else if(!num2)
     {
        setError('NUM2 Cannot Be Empty');
        return false;
     }
     else if(isNaN(parseFloat(num1)) || isNaN(parseFloat(num2)))
     {
        setError('Invalid input. Please enter valid numbers.');
        return false;
     }
    setError('');
    return true;
  };

  const handleOperation = (operation) => {
    if (!validateInput()) {
      return;
    }

    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    switch (operation) {
      case 'add':
        setResult(number1 + number2);
        break;
      case 'subtract':
        setResult(number1 - number2);
        break;
      case 'multiply':
        setResult(number1 * number2);
        break;
      case 'divide':
        setResult(number1 / number2);
        break;
      default:
        break;
    }
  };

  return (
    <div className='calcdiv'>
        <h2>React Calculator</h2>
        
      <input type="text" id='num1' value={num1} onChange={(e) => handleInputChange(e, setNum1)} placeholder='NUM 1' />
    
      <input type="text" id='num2' value={num2} onChange={(e) => handleInputChange(e, setNum2)} placeholder='NUM 2' />
      
     <div className='buttons'>
        <button onClick={() => handleOperation('add')}>+</button>
      <button onClick={() => handleOperation('subtract')}>-</button>
      <button onClick={() => handleOperation('multiply')}>*</button>
      <button onClick={() => handleOperation('divide')}>/</button>
      </div>
      
      
      {error && <div>
        <h3 style={{ color: 'red' }}>Error!</h3>
       <div>{error}</div>
       </div>}
        
      {result !== null && <div>
        <h3 style={{ color: 'blue' }}>Success!</h3>
       <div>Result: {result}</div>
       </div>}
    </div>
  );
};

{/* <Hello/> */}

ReactDOM.render(<Calculator/>,document.getElementById("root"));