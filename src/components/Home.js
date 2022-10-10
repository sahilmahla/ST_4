import React, { useState } from 'react';

export function Home() {
  const [count,setCount] = useState(0);
  
  const icn = () => {
    setCount(prev => prev + 1);
  };
  const mul = () =>{
    setCount(prev => prev*2);
  }
  const dec = ()=>{
    setCount(prev => prev-1);
  }
  return (
    <div className="home-container">
      <h1 style={{color: "#17a2b8"}}>Counter</h1>
      <div style={{color: "#28a745" , fontWeight: "700" , fontSize: "4.5rem"}}>{count}</div>
      <div>
        <button style={{display: "inline" ,marginRight:"8px", backgroundColor:"rgb(238, 238, 31)", border: "none",borderRadius:"5px" , padding:"5px 15px 5px 15px"}} onClick={icn}>Increment</button>
        <button style={{display: "inline" , marginRight:"8px", backgroundColor:"rgb(238, 238, 31)", border: "none",borderRadius:"5px", padding:"5px 15px 5px 15px"}} onClick={mul}>Double</button>
        <button style={{display: "inline" , marginRight:"8px", backgroundColor:"rgb(238, 238, 31)", border: "none",borderRadius:"5px", padding:"5px 15px 5px 15px"}} onClick={dec}>Decrement</button>
      </div>
      <span>🤞</span>
    </div>
  );
}
