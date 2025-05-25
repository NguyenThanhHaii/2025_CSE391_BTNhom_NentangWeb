import React, { useState } from 'react';

function CounterFunction() {
  const [count, setCount] = useState(0);

  return (
    <div style={styles}>
      <h2>Function Counter</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

const styles = {
  border: '1px solid gray',
  padding: '1rem',
  margin: '1rem',
};

export default CounterFunction;
