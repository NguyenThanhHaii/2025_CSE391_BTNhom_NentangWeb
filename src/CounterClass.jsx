// Import React và Component từ thư viện React
import { Component } from "react";

// Import các icon từ thư viện react-icons
import { FaPlus, FaMinus, FaUndo } from "react-icons/fa";

// Định nghĩa một component dạng class để đếm số
class CounterClass extends Component {
  // Khởi tạo constructor để khai báo state ban đầu
  constructor(props) {
    super(props);
    // State ban đầu với count = 0
    this.state = { count: 0 };
  }

  // Hàm tăng giá trị count lên 1
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // Hàm giảm giá trị count xuống 1
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  // Hàm đặt lại giá trị count về 0
  reset = () => {
    this.setState({ count: 0 });
  };

  // Phương thức render() để hiển thị giao diện của component
  render() {
    return (
      <div className="text-center border border-gray-200 bg-white rounded-md p-16 m-4 shadow-md max-w-md mx-auto">
        {/* Tiêu đề component */}
        <h3 className="text-2xl font-semibold mb-4">Class Counter</h3>

        {/* Hiển thị giá trị count hiện tại */}
        <p className="text-lg mb-4">Count: {this.state.count}</p>

        {/* Các nút điều khiển */}
        <div className="flex justify-center gap-3">
          {/* Nút tăng */}
          <button
            onClick={this.increment}
            className="px-4 py-2 bg-pink-300 text-white rounded-md hover:bg-pink-400 transition-colors duration-300 flex items-center gap-2"
          >
            <FaPlus /> Increment
          </button>

          {/* Nút giảm */}
          <button
            onClick={this.decrement}
            className="px-4 py-2 bg-blue-300 text-white rounded-md hover:bg-blue-400 transition-colors duration-300 flex items-center gap-2"
          >
            <FaMinus /> Decrement
          </button>

          {/* Nút reset */}
          <button
            onClick={this.reset}
            className="px-4 py-2 bg-purple-300 text-white rounded-md hover:bg-purple-400 transition-colors duration-300 flex items-center gap-2"
          >
            <FaUndo /> Reset
          </button>
        </div>
      </div>
    );
  }
}

export default CounterClass;
