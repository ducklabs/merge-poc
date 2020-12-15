import React from "react";
import { MemoryRouter } from "react-router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat } from "@fortawesome/free-solid-svg-icons";
import { Colors } from "../../../constants/colors";

import { SectionButton } from "../NavigationComponents";

export default {
  title: "CAA/Navigation",
  component: SectionButton,
  decorators: [],
  argTypes: {},
};

const Template = args => (
  <MemoryRouter initialEntries={["/bark"]}>
    <SectionButton {...args}>{args.label}</SectionButton>
  </MemoryRouter>
);

const icon = (
  <FontAwesomeIcon icon={faCat} style={{ width: 28, height: 28 }} color={Colors.CuriousBlue} />
);

export const Section_Button = Template.bind({});
Section_Button.args = {
  isAdminSection: false,
  onClick: null,
  to: "/meow",
  label: "meow",
  icon: icon,
};
