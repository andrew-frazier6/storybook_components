import React from "react";
import { storiesOf } from "@storybook/react";
import Select from "./Select";

storiesOf("Select", module)
  .add("Select", () => <Select label="Select" type="Select" />)
  .add("Select-medium", () => <Select label="Select" type="Select" medium />)
  .add("Select-small", () => <Select label="Select" type="Select" small />)
  .add("Select-grey", () => <Select label="Select" type="Select" grey />)
  .add("Select-grey-medium", () => (
    <Select label="Select" type="Select" medium grey />
  ))
  .add("Select-grey-small", () => (
    <Select label="Select" type="Select" small grey />
  ));
