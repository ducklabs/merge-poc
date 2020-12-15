import React from "react";

import { SearchField } from "../FormComponents";

export default {
  title: "CAA/Input",
  component: SearchField,
};

const Template = args => <SearchField {...args}>{args.label}</SearchField>;

export const Search = Template.bind({});
Text.args = {};
