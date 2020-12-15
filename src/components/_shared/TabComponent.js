import React from "react";
import styled from "styled-components";
import { Fonts } from "../../constants/fonts";
import { Colors } from "../../constants/colors";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Tab = styled.div`
  font-family: ${Fonts.DefaultBold};
  font-size: 15px;
  color: ${Colors.Lynch};
  padding-bottom: 3px;
  margin-right: 25px;
  text-transform: uppercase;
  cursor: pointer;

  ${props =>
    props.isCurrent &&
    `
  border-bottom: 2px solid ${Colors.Cerulean}
  color: ${Colors.Cerulean};
  `}
`;

export const TabComponent = props => {
  const { tabs, setCurrentTab, currentTab } = props;

  return (
    <Wrapper>
      {tabs.map(tab => (
        <Tab key={tab} isCurrent={tab === currentTab} onClick={() => setCurrentTab(tab)}>
          {tab}
        </Tab>
      ))}
    </Wrapper>
  );
};
