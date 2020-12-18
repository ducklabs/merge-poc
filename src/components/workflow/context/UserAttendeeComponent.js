import React from "react";
import PropTypes from "prop-types";
import {RowContainer} from "../../_shared/ContainerComponents";
import {CheckBox} from "../../_shared/FormComponents";
import styled from "styled-components";
import {Colors} from "../../../constants/colors";
import {Fonts} from "../../../constants/fonts";
import {NonSelectableText} from "../../_shared/TextComponents";

const NameContainer = styled.div`
  min-width: 200px;
  border: 1px solid #ced4da;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  background-color: ${Colors.White};
  background-size: cover;
  font-family: ${Fonts.Default};
  font-size: 14px;
  color: ${props => (props.selected ? Colors.BondiBlue : Colors.MidnightExpress)};
  transition: color 0.2s ease-in-out;
  padding: 11px;
  cursor: pointer;
  ${NonSelectableText};
`;

const OuterCheckBoxContainer = styled.div`
  width: 40px;
  height: 38px;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-style: solid;
  border-color: #ced4da;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  border-right: none;
  background-color: #e9ecef;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export function UserAttendeeComponent(props) {
  const {attendee, updateUserIsPresent} = props;
  let togglePresence = () => {
    updateUserIsPresent(!attendee.isPresent);
  };
  return (
    <RowContainer style={{marginTop: "10px", width: "fit-content"}}>
      <OuterCheckBoxContainer>
        <CheckBox onClick={togglePresence} checked={attendee.isPresent}/>
      </OuterCheckBoxContainer>
      <NameContainer onClick={togglePresence} selected={attendee.isPresent}>
        {attendee.firstName} {attendee.lastName}
      </NameContainer>
    </RowContainer>
  );
}

UserAttendeeComponent.propTypes = {
  /**
   * attendee
   */
  attendee: PropTypes.exact({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    controlTeam: PropTypes.string,
    uuid: PropTypes.string,
    isPresent: PropTypes.bool
  }),
  /**
   * Optional click handler
   */
  updateUserIsPresent: PropTypes.func,
}

