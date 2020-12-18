import React from "react";
import _ from "lodash";
import {UserAttendeeComponent} from "./UserAttendeeComponent";

const Template = args => <UserAttendeeComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  attendee: {
    firstName: 'John',
    lastName: 'Doe',
    controlTeam: 'xxxxxxxx',
    uuid: 'xxxxxxxx',
    isPresent: false
  },
  updateUserIsPresent: () => {},
};

export const Selected = Template.bind({});
Selected.args = _.cloneDeep(Default.args);
Selected.args.attendee.isPresent = true;

export const UnSelected = Template.bind({});
UnSelected.args = _.cloneDeep(Default.args);

export default {
  title: "CAA/FormComponents/CheckWithLabel",
  component: UserAttendeeComponent,
  argTypes: {},
};
