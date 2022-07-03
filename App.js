
import React, { useState } from "react";
import "./App.css";
function App() {
  let time=new Date().toLocaleTimeString();
  // HOOKS
  const[ctime,setCtime]=useState(time);
  // time variable is passed inside usesate which is then set by deafault for 'ctime' we can use setCtime to change its value in future

   let UpdateTime=()=>
   {
    let time=new Date().toLocaleTimeString();
    setCtime(time);
    
   }

   setInterval(UpdateTime,1000)
  return (
    <>
    <div className="main">
    <h1 className="time">{ctime}</h1>
    {/* <button onClick={UpdateTime}>Click to get time</button> */}
    </div>
    
    </>
  
  )
}

export default App;
