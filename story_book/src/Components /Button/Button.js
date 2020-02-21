import React from "react";

// const Button = props => (
//   <button className={`button-${props.type}`}>{props.label}</button>
// );

const Button = props => <button style={props.style}>{props.label}</button>;
export default Button;
