import React from "react";

import { BorderButton } from "../ButtonComponents";

export default {
  title: "CAA/Buttons/BorderButton",
  component: BorderButton,
  argTypes: {},
};

const Template = args => <BorderButton {...args}>{args.label}</BorderButton>;

export const Button = Template.bind({});
Button.args = {
  label: "Button",
};
