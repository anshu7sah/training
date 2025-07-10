import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByValue,
} from "../store/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-center h-screen flex-col gap-2">
      <p className="text-4xl">{count}</p>

      <button className="cursor-pointer" onClick={() => dispatch(increment())}>
        Increment
      </button>
      <button className="cursor-pointer" onClick={() => dispatch(decrement())}>
        Decrement
      </button>
      <button
        className="cursor-pointer"
        onClick={() => dispatch(incrementByValue(5))}
      >
        Increment by 5
      </button>
    </div>
  );
};

export default Counter;
