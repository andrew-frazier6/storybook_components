import React from "react";
import "./Checkbox.css";

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: this.props.check
    };
  }
  render() {
    return (
      <label className="checkbox">
        <input
          className="check-blue"
          type="checkbox"
          checked={this.state.checked}
        />
      </label>
    );
  }
}

export default Checkbox;
