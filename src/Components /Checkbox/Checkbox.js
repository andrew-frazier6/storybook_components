import React, { Component } from "react";
import "./Checkbox.stories";
import black_checked from "./Checkmark/black_checked.png";
import blue_checked from "./Checkmark/blue_checked.png";
import blue from "./Checkmark/blue.png";
import black from "./Checkmark/black.png";

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleCheck: false
    };
  }
  changeCheck = e => {
    e.preventDefault();
    this.setState({ toggleCheck: !this.state.toggleCheck });
  };
  render() {
    return (
      <div className="checkbox" onClick={this.changeCheck}>
        {this.state.toggleCheck ? (
          <div className="checked">
            <img
              src={this.props.blue ? blue_checked : black_checked}
              alt="checkbox"
            />
          </div>
        ) : (
          <div className="empty">
            <img src={this.props.blue ? blue : black} alt="checkbox" />
          </div>
        )}
        <label>{this.props.label}</label>
      </div>
    );
  }
}

export default Checkbox;
