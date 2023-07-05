import { useState } from "react";
import './style.css';
import Btns from "./btns";
import WrapperImg from "./WrapperImg";

function App() {
  const[num,setNum] = useState(0)
  // const[number, setNumber] = useState()
  // const[number2, setNumber2] = useState()
  return (
    <div>
      <h1>{num}</h1>
      <Btns num={num} setNum={setNum} />
      <WrapperImg num={num} setNum={setNum}/>
    </div>
  );
}

export default App;




// import React, { useState } from 'react';

// function Calculator() {
//   const [value, setValue] = useState('');

//   const handleClick = (event) => {
//     setValue(value + event.target.value);
//   };

//   const calculate = () => {
//     try {
//       setValue(eval(value).toString());
//     } catch (error) {
//       setValue('Error');
//     }
//   };

//   const clear = () => {
//     setValue('');
//   };

//   return (
//     <div>
//       <input type="text" value={value} />
//       <br />
//       <button onClick={handleClick} value="1">1</button>
//       <button onClick={handleClick} value="2">2</button>
//       <button onClick={handleClick} value="3">3</button>
//       <button onClick={handleClick} value="+">+</button>
//       <br />
//       <button onClick={handleClick} value="4">4</button>
//       <button onClick={handleClick} value="5">5</button>
//       <button onClick={handleClick} value="6">6</button>
//       <button onClick={handleClick} value="-">-</button>
//       <br />
//       <button onClick={handleClick} value="7">7</button>
//       <button onClick={handleClick} value="8">8</button>
//       <button onClick={handleClick} value="9">9</button>
//       <button onClick={handleClick} value="*">*</button>
//       <br />
//       <button onClick={clear}>Clear</button>
//       <button onClick={handleClick} value="0">0</button>
//       <button onClick={calculate}>=</button>
//       <button onClick={handleClick} value="/">/</button>
//     </div>
//   );
// }

// export default Calculator;