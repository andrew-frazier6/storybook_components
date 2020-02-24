import React from "react";
import "./Select.css";

const Select = props => {
  // Declare a classList variable and set it to an empty string
  // let [color, setColor] = useState(null);
  // let [style, setStyle] = useState(null);
  let classList = "";

  // Create an array of all of the story/component types you want to be
  // included in your component library
  let types = ["Select"];

  // Add a conditional statement that checks for the type and updates the
  // classList variable based on their existence.
  if (types.includes(props.type)) {
    classList += ` ${props.type}-css`;
  }

  // Add another conditional statement to check for additional properties (such as large)
  // and add to the classList variable based on this condition evaluating to true
  if (props.medium) {
    classList += ` Select-medium`; // Note the spacing here since we are adding to the string!
  }
  if (props.small) {
    // setStyle(`backgroundColor: white`)
    classList += ` Select-small`; // Note the spacing here since we are adding to the string!
  }
  if (props.grey) {
    classList += ` Select-grey`;
  }

  // Give the button's class a value of classList
  return (
    <div>
      <select className={classList}>
        <option>Select</option>
      </select>
    </div>
  );
};

export default Select;
