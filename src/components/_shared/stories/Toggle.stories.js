import React from "react";

import { Toggle } from "../Toggle";
import { Colors } from "../../../constants/colors";

export default {
  title: "CAA/Toggle",
  component: Toggle,
  argTypes: {
    // Need the default values because does not translate the default values in storybook from the variable
    handleColor: { control: "color", defaultValue: Colors.White },
    handleBorderColor: { control: "color", defaultValue: Colors.Ghost },
  },
};

const Template = args => <Toggle {...args}>{args.label}</Toggle>;

export const Toggle_Without_Labels = Template.bind({});
Toggle_Without_Labels.args = {
  option1: "valOne",
  option2: "valTwo",
  selectedOption: "valOne",
  onChange: () => {},
};
