import React from "react";

import { DropdownHeader } from "../FormComponents";

export default {
  title: "CAA/Input",
  component: DropdownHeader,
  argTypes: {
    openColor: { control: "color" },
    closedColor: { control: "color" },
  },
};

let open = false;

const Template = args => <DropdownHeader {...args}>{args.label}</DropdownHeader>;

export const DropdownHead = Template.bind({});
DropdownHead.args = {
  label: "Label Text",
  isOpen: open,
  setOpen: newVal => (open = newVal),
};
