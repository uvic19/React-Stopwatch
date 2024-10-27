import { useRef, useState } from 'react'
import './App.css'

function App() {

  const [time, setTime] = useState(0);

  let timerRef = useRef(null);

  function startTimer(){
    timerRef.current = setInterval(() => {
      setTime(time => time + 1)
    }, 1000);
  }

  function stopTimer(){
    clearInterval(timerRef.current);
    timerRef.current = null
  }

  function resetTimer(){
    stopTimer();
    setTime(0);
  }


  return (
    <div className='container'>
      <h1>React Stopwatch:</h1>
      <p><span>{time}</span>s</p>
      <button onClick={startTimer}>
        Start
      </button>
      <br /> <br />

      <button onClick={stopTimer}>
        Stop
      </button>
      <br /> <br />

      <button onClick={resetTimer}>
        Reset
      </button>
      <br /> <br />


    </div>
  )
}

export default App
