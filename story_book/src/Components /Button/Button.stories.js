import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";
// PRIMARY BUTTONS
storiesOf("Button Primary", module)
  .add("Primary", () => <Button label="Primary" type="primary" />)
  .add("Primary-dark", () => <Button label="Primary" type="primary" dark />)
  .add("Primary-white", () => <Button label="Primary" type="primary" white />)
  .add("Primary-opaque", () => <Button label="Primary" type="primary" opaque />)
  .add("Primary-plain-big", () => <Button label="Primary" type="primary" big />)
  .add("Primary-opaque-big", () => (
    <Button label="Primary" type="primary" opaque big />
  ))
  .add("Primary-white-big", () => (
    <Button label="Primary" type="primary" white big />
  ));
// DANGER BUTTONS
storiesOf("Button Danger", module)
  .add("Danger", () => <Button label="Danger" type="danger" />)
  .add("Danger-dark", () => <Button label="Danger" type="danger" dark />)
  .add("Danger-white", () => <Button label="Danger" type="danger" white />)
  .add("Danger-opaque", () => <Button label="Danger" type="danger" opaque />)
  .add("Danger-plain-big", () => <Button label="Danger" type="danger" big />)
  .add("Danger-opaque-big", () => (
    <Button label="Danger" type="danger" opaque big />
  ))
  .add("Danger-white-big", () => (
    <Button label="Danger" type="danger" white big />
  ));
// SUCCESS BUTTONS
storiesOf("Button Success", module)
  .add("Success", () => <Button label="Success" type="success" />)
  .add("Success-dark", () => <Button label="Success" type="success" dark />)
  .add("Success-white", () => <Button label="Success" type="success" white />)
  .add("Success-opaque", () => <Button label="Success" type="success" opaque />)
  .add("Success-plain-big", () => <Button label="Success" type="success" big />)
  .add("Success-opaque-big", () => (
    <Button label="Success" type="success" opaque big />
  ))
  .add("Success-white-big", () => (
    <Button label="Success" type="success" white big />
  ));
// WARNING BUTTONS
storiesOf("Button Warning", module)
  .add("Warning", () => <Button label="Warning" type="warning" />)
  .add("Warning-dark", () => <Button label="Warning" type="warning" dark />)
  .add("Warning-white", () => <Button label="Warning" type="warning" white />)
  .add("Warning-opaque", () => <Button label="Warning" type="warning" opaque />)
  .add("Warning-plain-big", () => <Button label="Warning" type="warning" big />)
  .add("Warning-opaque-big", () => (
    <Button label="Warning" type="warning" opaque big />
  ))
  .add("Warning-white-big", () => (
    <Button label="Warning" type="warning" white big />
  ));
// DEFAULT BUTTONS
storiesOf("Button Default", module)
  .add("Default", () => <Button label="Default" type="default" />)
  .add("Default-dark", () => <Button label="Default" type="default" dark />)
  .add("Default-white", () => <Button label="Default" type="default" white />)
  .add("Default-opaque", () => <Button label="Default" type="default" opaque />)
  .add("Default-plain-big", () => <Button label="Default" type="default" big />)
  .add("Default-opaque-big", () => (
    <Button label="Default" type="default" opaque big />
  ))
  .add("Default-white-big", () => (
    <Button label="Default" type="default" white big />
  ));
