import React from "react";
import CounterClass from "./CounterClass";
import CounterFunction from "./CounterFunction";
import TodoList from "./TodoList";
import ProductList from "./ProductList";

function App() {
  return (
    <>
      <div>
        <h1>So sánh Class vs Function Component</h1>
        <CounterClass />
        <CounterFunction />
      </div>
      <TodoList />
      <ProductList />
    </>
  );
}

export default App;
