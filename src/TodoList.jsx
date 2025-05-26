// Import React và hook useState
import React, { useState } from "react";

// Import các component con
import InputForm from "./components/InputForm";
import NewTask from "./components/NewTask";
import FinishedTask from "./components/FinishedTask";
import CanceledTask from "./components/CanceledTask";

// Hàm định dạng thời gian từ timestamp sang dạng giờ:phút ngày/tháng/năm
const formatDateTime = (timestamp) => {
  const date = new Date(timestamp);
  const pad = (num) => num.toString().padStart(2, "0");
  return `${pad(date.getHours())}:${pad(date.getMinutes())} ${pad(
    date.getDate()
  )}/${pad(date.getMonth() + 1)}/${date.getFullYear()}`;
};

// Function component chính quản lý Todo List
function TodoList() {
  // Khai báo state
  const [todo, setTodo] = useState(""); // Lưu nội dung người dùng nhập
  const [listTask, setListTask] = useState([]); // Lưu danh sách công việc
  const [error, setError] = useState(""); // Lưu thông báo lỗi

  // Xử lý sự kiện thay đổi nội dung input
  const handleOnChange = (e) => {
    setTodo(e.target.value);
  };

  // Xử lý thêm công việc mới
  const submitTodo = () => {
    // Kiểm tra rỗng
    if (!todo.trim()) {
      setError("Vui lòng nhập kế hoạch của bạn");
      setTimeout(() => setError(""), 3000); // Xóa lỗi sau 3s
      return;
    }

    // Tạo object công việc mới
    const obj = {
      id: Date.now(), // ID là thời gian hiện tại
      content: todo, // Nội dung công việc
      status_id: 1, // Trạng thái 1: Mới
      created_at: Date.now(), // Thời gian tạo
    };

    // Cập nhật state
    setTodo("");
    setListTask([...listTask, obj]);
  };

  // Xử lý nhấn Enter để thêm công việc
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && todo.trim()) {
      submitTodo();
    }
  };

  // Đánh dấu công việc là đã hoàn thành (status_id = 2)
  const setTaskFinished = (task) => {
    setListTask((prev) =>
      prev.map((item) =>
        item.id === task.id ? { ...item, status_id: 2 } : item
      )
    );
  };

  // Đánh dấu công việc là đã hủy (status_id = 3)
  const setTaskCanceled = (task) => {
    setListTask((prev) =>
      prev.map((item) =>
        item.id === task.id ? { ...item, status_id: 3 } : item
      )
    );
  };

  // Chuyển công việc đã hủy hoặc đã hoàn thành về lại trạng thái mới (status_id = 1)
  const setTaskNew = (task) => {
    setListTask((prev) =>
      prev.map((item) =>
        item.id === task.id ? { ...item, status_id: 1 } : item
      )
    );
  };

  // Lọc danh sách theo trạng thái
  const listTaskNew = listTask.filter((task) => task.status_id === 1);
  const listTaskFinished = listTask.filter((task) => task.status_id === 2);
  const listTaskCanceled = listTask.filter((task) => task.status_id === 3);

  // Trả về giao diện JSX
  return (
    <div className="flex items-center justify-center py-12">
      <div className="max-w-6xl w-full">
        <div className="rounded-md px-8 py-10 shadow-md hover:shadow-lg transition-shadow bg-white">
          {/* Tiêu đề */}
          <h1 className="text-center text-3xl font-bold mb-5 text-gray-800 text-shadow-sm">
            Todo List
          </h1>

          {/* Hiển thị lỗi nếu có */}
          {error && (
            <div className="mx-6 mb-8 p-4 bg-red-100 text-red-700 rounded-md">
              {error}
            </div>
          )}

          {/* Form nhập công việc */}
          <InputForm
            todo={todo}
            handleOnChange={handleOnChange}
            handleKeyPress={handleKeyPress}
            submitTodo={submitTodo}
          />

          {/* Hiển thị 3 cột công việc theo trạng thái */}
          <div className="grid grid-cols-3 gap-5">
            {/* Cột công việc mới */}
            <div className="col-span-1">
              <h3 className="text-lg font-semibold bg-indigo-600 text-white rounded-md text-center py-3">
                Mới
              </h3>
              {listTaskNew.length === 0 ? (
                <p className="mt-6 text-center text-gray-500">trống</p>
              ) : (
                listTaskNew.map((task) => (
                  <NewTask
                    key={task.id}
                    task={task}
                    formatDateTime={formatDateTime}
                    setTaskFinished={setTaskFinished}
                    setTaskCanceled={setTaskCanceled}
                  />
                ))
              )}
            </div>

            {/* Cột công việc đã hoàn thành */}
            <div className="col-span-1">
              <h3 className="text-lg font-semibold bg-green-600 text-white rounded-md text-center py-3">
                Đã hoàn thành
              </h3>
              {listTaskFinished.length === 0 ? (
                <p className="mt-6 text-center text-gray-500">trống</p>
              ) : (
                listTaskFinished.map((task) => (
                  <FinishedTask
                    key={task.id}
                    task={task}
                    formatDateTime={formatDateTime}
                    setTaskCanceled={setTaskCanceled}
                  />
                ))
              )}
            </div>

            {/* Cột công việc đã hủy */}
            <div className="col-span-1">
              <h3 className="text-lg font-semibold bg-red-600 text-white rounded-md text-center py-3">
                Đã hủy
              </h3>
              {listTaskCanceled.length === 0 ? (
                <p className="mt-6 text-center text-gray-500">trống</p>
              ) : (
                listTaskCanceled.map((task) => (
                  <CanceledTask
                    key={task.id}
                    task={task}
                    formatDateTime={formatDateTime}
                    setTaskNew={setTaskNew}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
