// Định nghĩa component InputForm sử dụng destructuring props: todo, handleOnChange, handleKeyPress, submitTodo
function InputForm({ todo, handleOnChange, handleKeyPress, submitTodo }) {
  return (
    <div className="flex gap-4 mx-6 mb-8">
      <input
        type="text"
        value={todo} // Gán giá trị hiện tại của ô input bằng state 'todo'
        placeholder="Bạn có kế hoạch gì ..."
        onChange={handleOnChange} // Gọi hàm xử lý khi giá trị input thay đổi
        onKeyDown={handleKeyPress} // Gọi hàm xử lý khi người dùng nhấn phím (ví dụ Enter để submit)
        className="flex-1 px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-700 placeholder-gray-400 text-base"
        style={{ fontSize: "20px" }}
      />

      {/* Nút bấm để lưu công việc mới */}
      <button
        onClick={submitTodo} // Gọi hàm xử lý khi nút được bấm
        disabled={!todo.trim()} // Vô hiệu hóa nút nếu nội dung todo là chuỗi rỗng (sau khi loại bỏ khoảng trắng)
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
