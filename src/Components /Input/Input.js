import React from "react";
import "./Input.css";

const Input = props => {
  let classList = "";

  let types = ["Input"];

  if (types.includes(props.type)) {
    classList += ` Input-${props.type}`;
  }

  if (props.medium) {
    classList += ` Input-medium`;
  }

  if (props.small) {
    classList += ` Input-small`;
  }
  return (
    <form className="container">
      <label>{props.label}</label>
      <input
        style={props.style}
        placeholder={props.placeholder}
        className={classList}
      />
    </form>
  );
};
export default Input;
