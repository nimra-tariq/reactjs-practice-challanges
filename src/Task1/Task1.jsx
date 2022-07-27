import React from "react";
import { useState, useEffect } from "react";
const CountRender = () => {

  //to exclude first render count setting counter to -1
  const [counter, setCounter] = useState(-1);
  const [name, setName] = useState("");

  useEffect(() => {
    setCounter(counter + 1);
  }, [name]);

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        <h3>render count : {counter}</h3>
      </div>
    </>
  );
};

export default CountRender;
