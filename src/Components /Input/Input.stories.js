import React from "react";
import { storiesOf } from "@storybook/react";
import Input from "./Input";
import "./Input.css";

storiesOf("Input", module)
  .add("Input", () => <Input label="Email" type="Input" />)
  .add("Input-medium", () => <Input label="Email" type="Input" medium />)
  .add("Input-small", () => <Input label="Email" type="Input" small />);
