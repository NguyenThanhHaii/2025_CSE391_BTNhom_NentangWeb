import React, { useState } from "react";
import InputForm from "./components/InputForm";
import NewTask from "./components/NewTask";
import FinishedTask from "./components/FinishedTask";
import CanceledTask from "./components/CanceledTask";

const formatDateTime = (timestamp) => {
  const date = new Date(timestamp);
  const pad = (num) => num.toString().padStart(2, "0");
  return `${pad(date.getHours())}:${pad(date.getMinutes())} ${pad(
    date.getDate()
  )}/${pad(date.getMonth() + 1)}/${date.getFullYear()}`;
};

function TodoList() {
  const [todo, setTodo] = useState("");
  const [listTask, setListTask] = useState([]);
  const [error, setError] = useState("");

  const handleOnChange = (e) => {
    setTodo(e.target.value);
  };

  const submitTodo = () => {
    if (!todo.trim()) {
      setError("Vui lòng nhập kế hoạch của bạn");
      setTimeout(() => setError(""), 3000);
      return;
    }
    const obj = {
      id: Date.now(),
      content: todo,
      status_id: 1,
      created_at: Date.now(),
    };
    setTodo("");
    setListTask([...listTask, obj]);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && todo.trim()) {
      submitTodo();
    }
  };

  const setTaskFinished = (task) => {
    setListTask((prev) =>
      prev.map((item) =>
        item.id === task.id ? { ...item, status_id: 2 } : item
      )
    );
  };

  const setTaskCanceled = (task) => {
    setListTask((prev) =>
      prev.map((item) =>
        item.id === task.id ? { ...item, status_id: 3 } : item
      )
    );
  };

  const setTaskNew = (task) => {
    setListTask((prev) =>
      prev.map((item) =>
        item.id === task.id ? { ...item, status_id: 1 } : item
      )
    );
  };

  const listTaskNew = listTask.filter((task) => task.status_id === 1);
  const listTaskFinished = listTask.filter((task) => task.status_id === 2);
  const listTaskCanceled = listTask.filter((task) => task.status_id === 3);

  return (
    <div className="flex items-center justify-center bg-gray-100 py-12">
      <div className="max-w-6xl w-full">
        <div className="rounded-md px-8 py-10 border border-gray-300 bg-white">
          <h1 className="text-center text-3xl font-bold mb-5 text-gray-800 text-shadow-sm">
            Todo List
          </h1>
          {error && (
            <div className="mx-6 mb-8 p-4 bg-red-100 text-red-700 rounded-md">
              {error}
            </div>
          )}
          <InputForm
            todo={todo}
            handleOnChange={handleOnChange}
            handleKeyPress={handleKeyPress}
            submitTodo={submitTodo}
          />
          <div className="grid grid-cols-3 gap-5">
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
