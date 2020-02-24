import React from "react";
import "./Voucher.css";

const Voucher = props => {
  let classList = "";

  let types = ["voucher"];

  if (types.includes(props.type)) {
    classList += ` Voucher-${props.type}`;
  }
  if (props.medium) {
    classList += ` Voucher-medium`;
  }
  return (
    <form>
      <div className="container">
        <input placeholder="Voucher Code" className={classList}></input>
        <label>{props.label}</label>
      </div>
    </form>
  );
};
export default Voucher;
