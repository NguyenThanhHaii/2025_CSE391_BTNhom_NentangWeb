// Import các thư viện
import { useState } from "react";
import { FaPlus, FaMinus, FaUndo } from "react-icons/fa";

// Định nghĩa một Function Component để đếm số
function CounterFunction() {
  // Sử dụng hook useState để khai báo biến đếm và hàm cập nhật
  const [count, setCount] = useState(0);

  // Hàm tăng count lên 1
  const increment = () => setCount((prevCount) => prevCount + 1);

  // Hàm giảm count xuống 1
  const decrement = () => setCount((prevCount) => prevCount - 1);

  // Hàm đặt lại count về 0
  const reset = () => setCount(0);

  // JSX trả về giao diện component
  return (
    <div className="text-center border border-gray-200 bg-white rounded-md p-16 m-4 shadow-md max-w-md mx-auto">
      {/* Tiêu đề */}
      <h3 className="text-2xl font-semibold mb-4">Functional Counter</h3>

      {/* Hiển thị giá trị count hiện tại */}
      <p className="text-lg mb-4">Count: {count}</p>

      {/* Các nút điều khiển */}
      <div className="flex justify-center gap-3">
        {/* Nút tăng */}
        <button
          onClick={increment}
          className="px-4 py-2 bg-pink-300 text-white rounded-md hover:bg-pink-400 transition-colors duration-300 flex items-center gap-2"
        >
          <FaPlus /> Increment
        </button>

        {/* Nút giảm */}
        <button
          onClick={decrement}
          className="px-4 py-2 bg-blue-300 text-white rounded-md hover:bg-blue-400 transition-colors duration-300 flex items-center gap-2"
        >
          <FaMinus /> Decrement
        </button>

        {/* Nút reset */}
        <button
          onClick={reset}
          className="px-4 py-2 bg-purple-300 text-white rounded-md hover:bg-purple-400 transition-colors duration-300 flex items-center gap-2"
        >
          <FaUndo /> Reset
        </button>
      </div>
    </div>
  );
}

export default CounterFunction;
