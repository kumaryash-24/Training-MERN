
import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  console.log(count); 

  function handleCount() {
    setCount((state) => state + 1);
    setCount((prev) => prev + 1);
    setCount((data) => data + 1);
  }

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={handleCount}>Increment</button>
    </>
  );
}

export default App;
