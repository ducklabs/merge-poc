import React from "react";

import TimePickers from "../TimePicker";
import moment from "moment";

export default {
  title: "CAA/TimePicker",
  component: TimePickers,
};

const Template = args => <TimePickers {...args}>{args.label}</TimePickers>;

export const Text = Template.bind({});
Text.args = {
  value: new moment().format("HH:mm"),
  updateTime: () => {},
};
