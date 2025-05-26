import React, { Component } from "react";
import { FaPlus, FaMinus, FaUndo } from "react-icons/fa";

class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div className="text-center border border-gray-300 bg-white rounded-md p-16 m-4 shadow-md max-w-md mx-auto">
        <h3 className="text-2xl font-semibold mb-4">Class Counter</h3>
        <p className="text-lg mb-4">Count: {this.state.count}</p>
        <div className="flex justify-center gap-3">
          <button
            onClick={this.increment}
            className="px-4 py-2 bg-pink-300 text-white rounded-md hover:bg-pink-400 transition-colors duration-300 flex items-center gap-2"
          >
            <FaPlus /> Increment
          </button>
          <button
            onClick={this.decrement}
            className="px-4 py-2 bg-blue-300 text-white rounded-md hover:bg-blue-400 transition-colors duration-300 flex items-center gap-2"
          >
            <FaMinus /> Decrement
          </button>
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
