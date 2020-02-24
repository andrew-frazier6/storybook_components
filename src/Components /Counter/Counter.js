import React, { Component } from "react";
import Button from "../Button/Button";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  increase = () => {
    let count = this.state.count + 1;
    this.setState({
      count: count
    });
  };
  decrease = () => {
    let count = this.state.count - 1;
    this.setState({
      count: count
    });
  };
  render() {
    return (
      <div className="counter">
        <Button onClick={this.decrease} label="-" type="primary" outline />
        <p className="count">{this.state.count}</p>
        <Button onClick={this.increase} label="+" type="primary" outline />
      </div>
    );
  }
}

export default Counter;
