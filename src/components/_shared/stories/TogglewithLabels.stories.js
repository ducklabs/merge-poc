import React from "react";

import { ToggleWithLabels } from "../Toggle";
import { Colors } from "../../../constants/colors";

export default {
  title: "CAA/Toggle",
  component: ToggleWithLabels,
  argTypes: {
    // Need the default values because does not translate the default values in storybook from the variable
    onColor: { control: "color", defaultValue: Colors.BondiBlue },
    offColor: { control: "color", defaultValue: Colors.White },
  },
};

const Template = args => <ToggleWithLabels {...args}>{args.label}</ToggleWithLabels>;

export const Toggle_With_Labels = Template.bind({});
Toggle_With_Labels.args = {
  option1: {
    value: "valOne",
    label: "Option One",
  },
  option2: {
    value: "valTwo",
    label: "Option Two",
  },
  selectedOption: "valOne",
  onChange: () => {},
};
