import React from "react";
import { storiesOf } from "@storybook/react";
import Checkbox from "./Checkbox";
import "./Checkbox.css";

storiesOf("Checkbox", module)
  .add("Checkbox", () => <Checkbox label="Checkbox" type="checkbox" />)
  .add("Checkbox-blue", () => <Checkbox label="Checkbox" type="checkbox" />);
