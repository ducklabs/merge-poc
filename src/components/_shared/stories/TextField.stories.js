import React from "react";

import { TextField } from "../FormComponents";

export default {
  title: "CAA/Input",
  component: TextField,
};

const Template = args => <TextField {...args}>{args.label}</TextField>;

export const Text = Template.bind({});
Text.args = {
  value: "Text",
};
