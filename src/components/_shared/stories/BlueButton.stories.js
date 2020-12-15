import React from "react";

import { BlueButton } from "../ButtonComponents";

export default {
  title: "CAA/Buttons/BlueButton",
  component: BlueButton,
  argTypes: {},
};

const Template = args => <BlueButton {...args}>{args.label}</BlueButton>;

export const Button = Template.bind({});
Button.args = {
  label: "Button",
};
