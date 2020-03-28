import React from "react";
import "./Voucher.css";
import Input from "../Input/Input";
import Button from "../Button/Button";

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
      <div className="voucher-container">
        <Input small style={{ height: props.medium ? "44px" : "" }} />
        <Button
          type="primary"
          label={props.label}
          white
          style={{ height: props.medium ? "50px" : "" }}
        />
      </div>
    </form>
  );
};
export default Voucher;
