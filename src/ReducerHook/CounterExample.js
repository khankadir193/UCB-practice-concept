import React, { useReducer } from "react";

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};

const CounterExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count } = state;

  //   const increment = () => {
  //     dispatch({ type: "increment" });
  //   };

  //   const decrement = () => {
  //     dispatch({ type: "decrement" });
  //   };

  return (
    <div>
      <h2>Count:-{count}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
};
export default CounterExample;