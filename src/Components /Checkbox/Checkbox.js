import React from "react";
import "./Checkbox.css";

const Checkbox = props => {
  let classList = "";

  let types = ["Checkbox"];

  if (types.includes(props.type)) {
    classList += ` Checkbox-${props.type}`;
  }
  if (props.medium) {
    classList += ` Checkbox-medium`;
  }
  return (
    <div type="checkbox" checked="checked">
      <div className="image"></div>
    </div>
  );
};
export default Checkbox;
