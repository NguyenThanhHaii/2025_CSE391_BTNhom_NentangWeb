import React from "react";
import CounterClass from "./CounterClass";
import CounterFunction from "./CounterFunction";
import TodoList from "./TodoList";
import ProductList from "./ProductList";

function App() {
  return (
    <div className="bg-gray-100 py-10">
      <h1 className="text-3xl font-bold text-center bg-gray-100 text-gray-800 py-6">
        So sánh Class vs Function Component
      </h1>
      <div className="flex justify-center bg-gray-100 p-4 mb-10">
        <div className="flex flex-col sm:flex-row gap-10">
          <CounterClass />
          <CounterFunction />
        </div>
      </div>
      <TodoList />
      <ProductList />
    </div>
  );
}

export default App;
