import React, {useState} from 'react';
import './SimpleCounter.css'

const SimpleCounter = () => {

    const [count,setCount] = useState(0)
    
    const incr = () =>{
      setCount(count +1);
    }
    const decr = () =>{
      (count === 0)?   setCount(0):
      setCount(count -1);     
    }
    const reset = () => {
      setCount(0);
    }
  
    return(
      <div id='container'>
           <div>
            <center> <h1 id='heading'>Simple Counter</h1></center> <br/>
               <center><h1 id='count'>{count}</h1></center>
               <button class= 'btn' onClick={incr}>Increase</button>
               <button class= 'btn' onClick={reset}>Reset</button>
               <button class= 'btn' onClick={decr}>Decrease</button>
            </div>    
    
    
      </div>
    )
  
  }
  
  export default SimpleCounter;