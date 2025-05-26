// Import thư viện React
import React from "react";

// Định nghĩa component CanceledTask nhận vào 3 props:
// - task: đối tượng công việc đã bị huỷ
// - formatDateTime: hàm để định dạng ngày/giờ tạo công việc
// - setTaskNew: hàm xử lý khi người dùng muốn chuyển công việc bị huỷ quay lại trạng thái mới
function CanceledTask({ task, formatDateTime, setTaskNew }) {
  return (
    <div className="px-4 py-3 w-full rounded-md bg-white mt-6 border border-red-300 transition-all duration-300 todo-card">
      <div className="mb-3 flex items-start justify-between">
        {/* Hiển thị thời gian tạo task */}
        <p className="text-xs text-gray-500" style={{ fontSize: "14px" }}>
          {formatDateTime(task.created_at)}
        </p>

        <div className="flex items-start gap-3">
          <svg
            onClick={() => setTaskNew(task)} // Khi click, gọi hàm setTaskNew để đưa task về trạng thái ban đầu
            xmlns="http://www.w3.org/2000/svg"
            className="icon cursor-pointer text-indigo-500 hover:text-indigo-600 text-2xl transition-colors duration-200"
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
          >
            <g fill="currentColor">
              <path
                fillRule="evenodd"
                d="M8 3a5 5 0 1 1-4.546 2.914a.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2z"
              />
              <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466" />
            </g>
          </svg>
        </div>
      </div>

      {/* Hiển thị nội dung công việc bị huỷ */}
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

export default CanceledTask;
