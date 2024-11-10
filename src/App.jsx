import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter,setCounter] = useState(5)

  //let counter = 15;

  const addValue = () =>{
    //console.log("Value added",Math.random()); 
    
    //counter = counter + 1;
    //setCounter(counter + 1);
    if(counter >= 15)
    {
      alert('You have not set Value above 15, ' + ' Values range is from 1 to 15');
      setCounter(counter = 5);
    }
    else
    {
      setCounter(counter + 1);
      //Interview Question
      // setCounter((prevCounter => prevCounter + 1));
      // setCounter((prevCounter => prevCounter + 1));
      // setCounter((prevCounter => prevCounter + 1));
    }
    //console.log("Clicked",counter);
  }

  const removeValue = () => {
    //setCounter(counter -1);
    if(counter <= 0)
      {
        alert('You have not set Negative Values');
        setCounter(counter = 5);
      }
      else
      {
        setCounter(counter - 1);
      }
    
  }

  return (
    <>
     <h1>React Hooks Project</h1>
     <h2 className='pt-5 pb-5'>Counter Value : {counter}</h2>

     <button
     onClick={addValue}
     >Add value {counter}</button><br/><br/>
     <button
     onClick={removeValue}
     >Remove value {counter}</button>
     <p className='pb-10 pt-5'>Footer : {counter}</p>
     <footer className='pt-5 pb-5'>Developed by : Yogesh Rana (Full Stack Developer)</footer>
    </>
  )
}

export default App
