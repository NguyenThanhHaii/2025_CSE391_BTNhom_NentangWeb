import React, { Component } from 'react';

class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div style={styles}>
        <h2>Class Counter</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

const styles = {
  border: '1px solid gray',
  padding: '1rem',
  margin: '1rem',
};

export default CounterClass;
