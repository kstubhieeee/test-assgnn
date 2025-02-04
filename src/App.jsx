import React, { useState, useEffect } from "react";

const LifecycleLogger = () => {



  useEffect(() => {
    console.log("2. useEffect without a variable in dependency array");

    return () => {
      console.log("4 useEffect Cleanup");
    };
  }, []);



  console.log("1. Function Component Render");

  const [count, setCount] = useState(0);


  useEffect(() => {
    console.log("3. useEffect with a variable in dependency array");
  }, [count]);

  const handleUpdate = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ marginLeft: "700px" }}>
      <p style={{ marginLeft: "29px" }}>Count: {count}</p>
      <button onClick={handleUpdate}>Update State</button>
    </div>
  );
};

export default LifecycleLogger;
