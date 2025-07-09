import React, { useState, useRef, useEffect } from "react";

function ExampleCallback() {
  const [count, setCount] = useState(0);
  const [dummy, setDummy] = useState(false);

  // Regular function (re-created every render)
  const increment = () => setCount((prev) => prev + 1);

  const prevRef = useRef();

  useEffect(() => {
    const isSame = Object.is(prevRef.current, increment);
    console.log("Is same function as previous render:", isSame);
    prevRef.current = increment;
  });

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={() => setDummy(!dummy)}>Re-render</button>
      <Test />
    </div>
  );
}

export default ExampleCallback;
