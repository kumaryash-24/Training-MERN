
// import React, { useState } from "react";

// function EffectDemo() {
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     setCount(count + 1);
//   }

//   return (
//     <>
//       <h1>I have rendered {count} times</h1>
//       <button onClick={handleClick}>Increase Count</button>
//     </>
//   );
// }

// export default EffectDemo;

//clean up 
import React, { useState, useEffect } from "react";

function EffectDemo() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Running every second");
    }, 1000);

  
    return () => {
      clearInterval(timer);
      console.log("Timer cleaned up");
    };
  }, []); 

  return (
    <>
      <h1>I have rendered {count} times</h1>
      <button onClick={handleClick}>Increase Count</button>
    </>
  );
}

export default EffectDemo;

