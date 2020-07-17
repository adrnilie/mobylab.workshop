import React, { useState } from "react";
import CustomBtn from "./CustomBtn";

const initialState = {
  counter: 0,
  message: "Result is zero",
};

const Counter = () => {
  const [state, setState] = useState(initialState);

  const increment = () => {
    setState({
      ...state,
      counter: state.counter + 1,
    });
  };

  const decrement = () => {
    setState({
      ...state,
      counter: state.counter - 1,
    });
  };

  const reset = () => {
    setState(initialState);
  };

  return (
    <section className="counter-wrapper">
      <div className="container">
        <div className="current-count">
          <h1>{state.counter}</h1>
          <span>{state.message}</span>
        </div>
        <div className="btn-wrapper">
          <CustomBtn text="Increment" variant="#bfff00" onClick={increment} />
          <CustomBtn text="Decrement" variant="#aa58af" onClick={decrement} />
          <CustomBtn text="Reset" variant="#ff0000" onClick={reset} />
        </div>
      </div>
    </section>
  );
};

export default Counter;
