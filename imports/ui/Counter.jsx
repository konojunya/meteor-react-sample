import React, { useState, useCallback} from "react";
import { Count } from "../api/count";
import { withTracker } from "meteor/react-meteor-data";

const Component = ({ defaultCount }) => {
  const [count, setCount] = useState(defaultCount)

  const incrementCount = useCallback(() => {
    setCount(count +1);
  }, [count])

  const decrementCount = useCallback(() => {
    setCount(count - 1);
  }, [count])

  const resetCount = useCallback(() => {
    setCount(0);
  }, [count]);

  return (
    <>
      <p>count: {count}</p>
      <button onClick={incrementCount}>increment</button>
      <button onClick={decrementCount}>decrement</button>
      <button onClick={resetCount}>reset</button>
      </>
  )
}

export const Counter = withTracker(() => {
  const countDocument = Count.findOne()

  return {
    defaultCount: countDocument != null ? countDocument.count : 0,
  }
})(Component);
