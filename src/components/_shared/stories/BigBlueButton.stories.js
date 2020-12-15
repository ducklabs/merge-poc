import React from "react";

import { BigBlueButton } from "../ButtonComponents";

export default {
  title: "CAA/Buttons/BigBlueButton",
  component: BigBlueButton,
  argTypes: {},
};

const Template = args => <BigBlueButton {...args}>{args.label}</BigBlueButton>;

export const Button = Template.bind({});
Button.args = {
  label: "Button",
};
