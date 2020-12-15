import styled from "styled-components";
import { Colors } from "../../constants/colors";
import React from "react";

export const ColumnContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;
  flex-direction: column;
`;

export const FullWidthColumnContainer = styled(ColumnContainer)`
  width: 100%;
  margin: auto;
  align-items: center;
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  flex-grow: 0;
  flex-basis: content;
`;

export const FullHeightColumnContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: content;
  align-items: stretch;
  min-height: 100vh;
`;

export const ScreenHeightColumnContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;
  align-items: stretch;
  height: 100vh;
`;

export const CenterFlexContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const RequiredFieldsBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 1 auto;
  margin: 16px 16px 24px;
  padding: 0px 16px 16px;
  border: 1px solid #cc0000;
  border-radius: 2px;
  background-size: cover;
`;

export const OptionalFieldsBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 1 auto;
  margin: 16px 16px 0px;
  padding: 0px 16px 16px;
  border-radius: 2px;
  background-size: cover;
`;

export const WhiteComponentContainer = styled.div`
  width: 100%;
  background-color: white;
  padding: 0px;
  box-sizing: border-box;
`;

export const ScrollableList = styled.div`
  justify-content: flex-start;
  flex-flow: column;
  flex-grow: 1;
  padding-top: 34px;
`;

export const FunkyShadedBox = styled.div`
  flex: 0 0 initial;
  align-items: center;
  text-align: center;
  width: calc(100% - 32px);
  margin: 16px;
  box-sizing: border-box;
  padding: 1px 20px 17px 20px;
  background: #bacbd6;
  border-radius: 3px;
  * {
    display: block;
    position: relative;
    float: none;
    clear: both;
    height: auto;
  }
`;

export const DividerLine = styled.div`
  height: 0;
  border-top: solid 1px ${Colors.WinterSky};
  margin: 10px 0;
`;

const StretchyContainer = styled.div`
  display: grid;
  counter-reset: grid-items;
  position: relative;
  grid-template-columns: repeat(auto-fit, minmax(${props => props.minWidth}px, 1fr));

  :before {
    position: absolute;
  }
`;

const StretchyItem = styled.div`
  counter-increment: grid-item;
  min-width: ${props => props.minWidth}px;
`;

export const StretchyGrid = props => {
  const { children, minItemWidth } = props;

  return (
    <StretchyContainer minWidth={minItemWidth}>
      {children.map(child => (
        <StretchyItem minWidth={minItemWidth} key={child.key}>
          {child}
        </StretchyItem>
      ))}
    </StretchyContainer>
  );
};

export const HorizontalLine = styled.div`
  height: 0;
  width: 100%;
  border-bottom: 1px solid ${props => props.color || Colors.Black};
`;

export const StepWrapper = styled.div`
  width: calc(100% - 30px);
  height: fit-content;
`;
