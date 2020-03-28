import React from "react";

import "./Button.css";

const Button = props => {
  // Declare a classList variable and set it to an empty string
  // let [color, setColor] = useState(null);
  // let [style, setStyle] = useState(null);
  let classList = "";

  // Create an array of all of the story/component types you want to be
  // included in your component library
  let types = ["primary", "danger", "success", "warning", "default", "icon"];

  // Add a conditional statement that checks for the type and updates the
  // classList variable based on their existence.
  if (types.includes(props.type)) {
    classList += ` button-${props.type}`;
    // setColor(props.type);
  }

  // Add another conditional statement to check for additional properties (such as large)
  // and add to the classList variable based on this condition evaluating to true
  if (props.dark) {
    classList += ` button-dark`; // Note the spacing here since we are adding to the string!
  }
  if (props.white) {
    classList += ` button-white`;
    // classList -= ` button - primary`; // Note the spacing here since we are adding to the string!
  }
  if (props.opaque) {
    classList += ` button-opaque`; // Note the spacing here since we are adding to the string!
  }
  if (props.big) {
    classList += ` button-big`; // Note the spacing here since we are adding to the string!
  }
  if (props.outline) {
    classList += ` button-outline`;
  }
  if (props.light) {
    classList += ` button-light`;
  }
  if (props.icon) {
    return (
      <button onClick={props.onClick} className={classList}>
        <img src={props.icon} alt=""></img>
        {props.label}
      </button>
    );
  }

  // Give the button's class a value of classList
  return (
    <button style={props.style} className={classList} onClick={props.onClick}>
      {props.label}
    </button>
  );
};

export default Button;
