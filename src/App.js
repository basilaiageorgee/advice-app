import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import icon from './images/icon-dice.svg'

function App() {
  const [advice, setAdvice] = useState([])

  useEffect(() => {
    axios
    .get('https://api.adviceslip.com/advice?t=' + Math.random())
    .then(response => setAdvice(response.data.slip))
  } ,[])

  const getAdvice = () => {
    axios
    .get('https://api.adviceslip.com/advice?t=' + Math.random())
    .then(response => setAdvice(response.data.slip))
  }

  return (
    <div className="App">
      <div className='main-container'>
        <p className='advice-id'>ADVICE   #{advice.id}</p>
        
        <h1 className='advice'>"{advice.advice}"</h1>

        <div class="divider"></div>

        <button className='btn' onClick={getAdvice}><img src={icon} alt="Dive Icon"/></button>
      </div>

      <footer class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/basilaiageorgee">basilaiageorgee</a>.
      </footer>
    </div>
  );
}

export default App;
