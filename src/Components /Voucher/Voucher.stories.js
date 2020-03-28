import React from "react";
import { storiesOf } from "@storybook/react";
import Voucher from "./Voucher";
import "./Voucher.css";

storiesOf("Voucher", module)
  .add("Voucher", () => <Voucher small label="Redeem" type="voucher" white />)
  .add("Voucher-medium", () => (
    <Voucher label="Redeem" type="voucher" medium white />
  ));
