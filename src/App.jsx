// Import các component được sử dụng trong ứng dụng
import CounterClass from "./CounterClass";
import CounterFunction from "./CounterFunction";
import TodoList from "./TodoList";
import ProductList from "./ProductList";

// Component gốc của ứng dụng - nơi hiển thị toàn bộ giao diện chính
function App() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Container giới hạn chiều rộng và căn giữa nội dung */}
      <div className="max-w-7xl mx-auto">
        {/* Phần tiêu đề trang */}
        <header className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Nhiệm vụ 2: Component Paradigms
          </h1>
          <h2 className="mt-2 text-2xl font-medium text-gray-600">
            Nhóm 6 - HelloWorld!
          </h2>
        </header>

        {/* Phần hiển thị 2 component đếm số để so sánh: Class vs Function Component */}
        <section className="mb-16">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8 text-shadow-sm">
            So sánh Class vs Function Component
          </h1>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl w-full">
              {/* Component sử dụng Class (ES6 class component) */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <CounterClass />
              </div>

              {/* Component sử dụng Function (Function component với hook) */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <CounterFunction />
              </div>
            </div>
          </div>
        </section>

        {/* Phần hiển thị danh sách việc cần làm */}
        <section className="mb-16">
          <TodoList />
        </section>

        {/* Phần hiển thị danh sách sản phẩm */}
        <section>
          <ProductList />
        </section>
      </div>
    </div>
  );
}

// Xuất component App để sử dụng ở main.jsx
export default App;
