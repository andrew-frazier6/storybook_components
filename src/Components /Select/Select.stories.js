import React from "react";
import { storiesOf } from "@storybook/react";
import Select from "./Select";

let data = ["apples", "pears", "oranges", "banana"];

storiesOf("Select", module)
  .add("Select", () => <Select label="Select" type="Select" options={data} />)
  .add("Select-medium", () => (
    <Select label="Select" type="Select" medium options={data} />
  ))
  .add("Select-small", () => (
    <Select label="Select" type="Select" small options={data} />
  ))
  .add("Select-grey", () => (
    <Select label="Select" type="Select" grey options={data} />
  ))
  .add("Select-grey-medium", () => (
    <Select label="Select" type="Select" medium grey options={data} />
  ))
  .add("Select-grey-small", () => (
    <Select label="Select" type="Select" small grey options={data} />
  ));
