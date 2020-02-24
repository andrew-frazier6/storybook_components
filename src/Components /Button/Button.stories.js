import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";
import Cart from "./cart_2.svg";
import Heart from "./hearts.svg";
// PRIMARY BUTTONS
storiesOf("Button Primary", module)
  .add("Primary", () => <Button label="Primary" type="primary" white />)
  .add("Primary-dark", () => (
    <Button label="Primary" type="primary" dark white />
  ))
  .add("Primary-white", () => <Button label="Primary" type="primary" outline />)
  .add("Primary-opaque", () => (
    <Button label="Primary" type="primary" opaque white />
  ))
  .add("Primary-big", () => <Button label="Primary" type="primary" big white />)
  .add("Primary-opaque-big", () => (
    <Button label="Primary" type="primary" opaque big white />
  ))
  .add("Primary-white-big", () => (
    <Button label="Primary" type="primary" big outline />
  ));
// DANGER BUTTONS
storiesOf("Button Danger", module)
  .add("Danger", () => <Button label="Danger" type="danger" white />)
  .add("Danger-dark", () => <Button label="Danger" type="danger" dark white />)
  .add("Danger-white", () => <Button label="Danger" type="danger" outline />)
  .add("Danger-opaque", () => (
    <Button label="Danger" type="danger" opaque white />
  ))
  .add("Danger-big", () => <Button label="Danger" type="danger" big white />)
  .add("Danger-opaque-big", () => (
    <Button label="Danger" type="danger" opaque big white />
  ))
  .add("Danger-white-big", () => (
    <Button label="Danger" type="danger" outline big />
  ));
// SUCCESS BUTTONS
storiesOf("Button Success", module)
  .add("Success", () => <Button label="Success" type="success" white />)
  .add("Success-dark", () => (
    <Button label="Success" type="success" dark white />
  ))
  .add("Success-white", () => <Button label="Success" type="success" outline />)
  .add("Success-opaque", () => (
    <Button label="Success" type="success" opaque white />
  ))
  .add("Success-big", () => <Button label="Success" type="success" big white />)
  .add("Success-opaque-big", () => (
    <Button label="Success" type="success" opaque big white />
  ))
  .add("Success-white-big", () => (
    <Button label="Success" type="success" outline big />
  ));
// WARNING BUTTONS
storiesOf("Button Warning", module)
  .add("Warning", () => <Button label="Warning" type="warning" white />)
  .add("Warning-dark", () => (
    <Button label="Warning" type="warning" dark white />
  ))
  .add("Warning-white", () => <Button label="Warning" type="warning" outline />)
  .add("Warning-opaque", () => (
    <Button label="Warning" type="warning" opaque white />
  ))
  .add("Warning-big", () => <Button label="Warning" type="warning" big white />)
  .add("Warning-opaque-big", () => (
    <Button label="Warning" type="warning" opaque big white />
  ))
  .add("Warning-white-big", () => (
    <Button label="Warning" type="warning" outline big />
  ));
// DEFAULT BUTTONS
storiesOf("Button Default", module)
  .add("Default", () => <Button label="Default" type="default" white />)
  .add("Default-dark", () => (
    <Button label="Default" type="default" dark white />
  ))
  .add("Default-white", () => <Button label="Default" type="default" outline />)
  .add("Default-opaque", () => (
    <Button label="Default" type="default" opaque white />
  ))
  .add("Default-big", () => <Button label="Default" type="default" big white />)
  .add("Default-opaque-big", () => (
    <Button label="Default" type="default" opaque big white />
  ))
  .add("Default-white-big", () => (
    <Button label="Default" type="default" outline big />
  ));

storiesOf("Button Icon", module)
  .add("Cart-icon", () => <Button image="cart" icon={Cart} type="icon" light />)
  .add("Favorites-icon", () => (
    <Button type="light" image="heart" icon={Heart} type="icon" light />
  ))
  .add("Add-favorites", () => (
    <Button
      label="Add to Favorties"
      image="heart"
      icon={Heart}
      type="icon"
      light
    />
  ))
  .add("Add-cart", () => (
    <Button label="Add to Cart" image="heart" icon={Cart} type="icon" light />
  ));
