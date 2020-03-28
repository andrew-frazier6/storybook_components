import React from "react";
import { storiesOf } from "@storybook/react";
import Checkbox from "./Checkbox";
storiesOf("Checkbox", module)
  .add("Black Checkbox", () => <Checkbox />)
  .add("Checkbox", () => <Checkbox blue label="" />)
  .add("Label Box", () => <Checkbox label="Optional Label" />);
