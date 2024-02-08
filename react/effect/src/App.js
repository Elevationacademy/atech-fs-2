import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

import Word from './components/Word';

function App() {

  const [num,setNum] = useState(1)


  const handleBtn = () => {
    setNum((num)=> num+1)
  }
  

  return (
    <>
    <div>Result :</div>
    {num%5==0 ? <Word/> : <div>not 5 dividable</div>}
    <div>{num}</div>
    <button onClick={handleBtn}>Click me to change num</button>
    </>
  );
}

export default App;
