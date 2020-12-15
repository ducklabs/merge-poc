import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Colors } from "../../constants/colors";
import { CaretIcon } from "../../res/img/icons";
import { Fonts } from "../../constants/fonts";
import { useLocation } from "react-router-dom";

const LinkIcon = styled.div`
  margin: 0 11px;
`;

const SectionButtonWrapper = styled(Link)`
  height: 55px;
  position: relative;
  //width: 230px;
  color: ${props => (props.adminsection ? Colors.GullGray : Colors.CuriousBlue)};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 13px;
  font-family: ${Fonts.DefaultBold};
  outline: 1px solid ${Colors.RiverBed};
  background-color: ${props =>
    props.to === props.currentpage ? Colors.DeepSeaGreen : Colors.MidnightExpress};
  z-index: 2;
  transition: 0.2s ease-in-out;

  :hover {
    color: white;
    background-color: ${props => (props.adminsection ? Colors.RiverBed : null)};
    outline: 1px solid ${Colors.RiverBed};
    z-index: 3;
  }
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    border: none;
  }
`;

const SectionBtnMain = styled.div`
  display: flex;
  align-items: center;
  text-transform: uppercase;
`;

export const NavGroup = styled.div`
  display: grid;
  grid-row-gap: 1px;
  margin-top: 50px;
`;

export const NavGroupTitle = styled.div`
  text-transform: uppercase;
  padding: 7px 15px;
  background-color: ${Colors.EbonyClay};
  font-size: 12px;
  color: ${Colors.GullGray};
`;

export const SectionButton = props => {
  const { onClick, to, label, icon, isAdminSection } = props;
  const { pathname } = useLocation();

  const caretColor = isAdminSection ? Colors.GullGray : Colors.CuriousBlue;
  return (
    <SectionButtonWrapper
      onClick={onClick}
      to={to}
      currentpage={pathname}
      adminsection={isAdminSection ? 1 : 0}
    >
      <SectionBtnMain>
        <LinkIcon>{icon}</LinkIcon>
        {label}
      </SectionBtnMain>
      <CaretIcon
        style={{ transform: "rotate(90deg)", margin: "0 10px" }}
        size={26}
        color={to === pathname ? `white` : caretColor}
      />
    </SectionButtonWrapper>
  );
};
