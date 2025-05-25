import React from "react";

function InputForm({ todo, handleOnChange, handleKeyPress, submitTodo }) {
  return (
    <div className="flex gap-4 mx-6 mb-8">
      <input
        type="text"
        value={todo}
        placeholder="Bạn có kế hoạch gì ..."
        onChange={handleOnChange}
        onKeyDown={handleKeyPress}
        className="flex-1 px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-700 placeholder-gray-400 text-base"
        style={{ fontSize: "20px" }}
      />
      <button
        onClick={submitTodo}
        disabled={!todo.trim()}
        className={`px-4 py-2 bg-indigo-600 text-white rounded-md font-medium transition-all duration-300 ${
          !todo.trim() ? "opacity-50 cursor-not-allowed" : "hover:bg-indigo-700"
        }`}
        style={{ fontSize: "20px" }}
      >
        Lưu
      </button>
    </div>
  );
}

export default InputForm;
