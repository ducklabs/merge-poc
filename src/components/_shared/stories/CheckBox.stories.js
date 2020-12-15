import React from "react";
import { CheckBox } from "../FormComponents";

export default {
  title: "CAA/Input",
  component: CheckBox,
  argTypes: {
    checkedColor: { control: "color" },
    uncheckedColor: { control: "color" },
  },
};

let checked = false;

const Template = args => <CheckBox {...args}>{args.label}</CheckBox>;

export const Check_Box = Template.bind({});
Check_Box.args = {
  checked: checked,
  onClick: () => (checked = !checked),
};
