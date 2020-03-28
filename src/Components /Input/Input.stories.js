import React from "react";
import { storiesOf } from "@storybook/react";
import Input from "./Input";
import "./Input.css";

storiesOf("Input", module)
  .add("Input", () => <Input label="Email" placeholder="Email" type="Input" />)
  .add("Input-medium", () => (
    <Input label="Email" placeholder="Email" type="Input" medium />
  ))
  .add("Input-small", () => (
    <Input label="Email" placeholder="Email" type="Input" small />
  ));
