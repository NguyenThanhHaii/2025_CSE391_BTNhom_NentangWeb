import React from "react";
import CounterClass from "./CounterClass";
import CounterFunction from "./CounterFunction";

function App() {
  return (
    <div>
      <h1>So sánh Class vs Function Component</h1>
      <CounterClass />
      <CounterFunction />
    </div>
  );
}

export default App;
