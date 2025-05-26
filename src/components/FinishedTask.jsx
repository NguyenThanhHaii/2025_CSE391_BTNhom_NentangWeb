// Import thư viện React
import React from "react";

// Định nghĩa component FinishedTask nhận vào 3 props:
// - task: đối tượng chứa thông tin công việc đã hoàn thành
// - formatDateTime: hàm định dạng thời gian
// - setTaskCanceled: hàm xử lý khi muốn chuyển trạng thái task sang "đã hủy"
function FinishedTask({ task, formatDateTime, setTaskCanceled }) {
  return (
    <div className="px-4 py-3 w-full rounded-md bg-white mt-6 border border-green-300 transition-all duration-300 todo-card">
      <div className="mb-3 flex items-start justify-between">
        {/* Hiển thị thời gian task được tạo, định dạng bằng hàm formatDateTime */}
        <p className="text-xs text-gray-500" style={{ fontSize: "14px" }}>
          {formatDateTime(task.created_at)}
        </p>

        {/* Vùng chứa các nút chức năng (ở đây chỉ có 1 nút huỷ task) */}
        <div className="flex items-start gap-3">
          <svg
            onClick={() => setTaskCanceled(task)} // Gọi hàm xử lý khi người dùng click icon
            xmlns="http://www.w3.org/2000/svg"
            className="icon cursor-pointer text-red-500 hover:text-red-600 text-2xl transition-colors duration-200"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="1.5"
              d="M9.17 4a3.001 3.001 0 0 1 5.66 0m5.67 2h-17m15.333 2.5l-.46 6.9c-.177 2.654-.265 3.981-1.13 4.79s-2.196.81-4.856.81h-.774c-2.66 0-3.991 0-4.856-.81c-.865-.809-.954-2.136-1.13-4.79l-.46-6.9M9.5 11l.5 5m4.5-5l-.5 5"
            />
          </svg>
        </div>
      </div>

      {/* Nội dung chính của task (tên công việc) */}
      <div>
        <p
          className="text-gray-800 overflow-wrap-break-word"
          style={{ fontSize: "20px" }}
        >
          {task.content}
        </p>
      </div>
    </div>
  );
}

export default FinishedTask;
