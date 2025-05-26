import React from "react";

// Component nhận vào props: task, formatDateTime, setTaskFinished, setTaskCanceled
function NewTask({ task, formatDateTime, setTaskFinished, setTaskCanceled }) {
  // Hàm xử lý khi bấm nút hoàn thành
  const handleFinish = () => setTaskFinished(task);
  // Hàm xử lý khi bấm nút hủy
  const handleCancel = () => setTaskCanceled(task);

  return (
    <div className="px-4 py-3 w-full rounded-md bg-white mt-6 border border-gray-300 transition-shadow hover:shadow-md">
      <div className="mb-3 flex items-start justify-between">
        {/* Hiển thị thời gian tạo task, dùng hàm formatDateTime */}
        <p className="text-sm text-gray-500">
          {formatDateTime(task.created_at)}
        </p>
        <div className="flex items-start gap-3">
          {/* Nút đánh dấu hoàn thành task */}
          <button
            onClick={handleFinish}
            aria-label="Đánh dấu đã hoàn thành"
            className="text-green-500 hover:text-green-600 text-2xl transition-colors duration-200"
          >
            {/* Icon check (SVG) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon cursor-pointer"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <g fill="none" stroke="currentColor" strokeWidth="1.5">
                <path
                  strokeLinecap="round"
                  d="M20.5 7v6c0 3.771 0 5.657-1.172 6.828S16.271 21 12.5 21h-1c-3.771 0-5.657 0-6.828-1.172S3.5 16.771 3.5 13V7"
                />
                <path d="M2 5c0-.943 0-1.414.293-1.707S3.057 3 4 3h16c.943 0 1.414 0 1.707.293S22 4.057 22 5s0 1.414-.293 1.707S20.943 7 20 7H4c-.943 0-1.414 0-1.707-.293S2 5.943 2 5Z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m9.5 13.4l1.429 1.6l3.571-4"
                />
              </g>
            </svg>
          </button>
          {/* Nút hủy task */}
          <button
            onClick={handleCancel}
            aria-label="Hủy task"
            className="text-red-500 hover:text-red-600 text-2xl transition-colors duration-200"
          >
            {/* Icon thùng rác (SVG) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon cursor-pointer"
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
          </button>
        </div>
      </div>
      {/* Hiển thị nội dung task */}
      <p className="text-lg text-gray-800 break-words">{task.content}</p>
    </div>
  );
}

export default NewTask;
