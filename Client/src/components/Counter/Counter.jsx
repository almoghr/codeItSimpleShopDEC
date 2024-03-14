import React, { useState, useEffect } from "react";

const Counter = ({ isTenTimes }) => {
  const [counter, setCounter] = useState(0);

  const handleCount = (type) => {
    const amount = isTenTimes ? 10 : 1
    if (type === "inc") {
      setCounter(counter + amount);
    } else {
      setCounter(counter - amount);
    }
  };

  useEffect(()=>{
    //this will occur on the initialization and every time counter is being set
    // setCounter(counter++) - do not use the set when you look at the respective variable
    console.log(counter)
    return () => {console.log('i am out!')};
  },[counter, isTenTimes])

  useEffect(()=>{
    console.log('wow')
  },[])
  
  return (
    <div>
      <button onClick={() => handleCount("dec")}>-</button>
      {counter}
      <button onClick={() => handleCount("inc")}>+</button>
    
    </div>
  );
};

export default Counter;
