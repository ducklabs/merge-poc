import styled from "styled-components";
import { Colors } from "../../constants/colors";
import { Fonts } from "../../constants/fonts";

export const Button = styled.button`
  height: 45px;
  width: calc(100% - 48px);
  padding: 6px 10px;
  border-radius: 3px;
  position: relative;
  text-decoration: none solid rgb(255, 255, 255);
  text-align: center;
  font-family: ${Fonts.Default};
  margin: auto;
  display: flex;
  flex: 0;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
`;

export const BlueButton = styled(Button)`
  border: none;
  background-color: #007da3;
  background-size: cover;
  color: #ffffff;
  font-size: 16px;
  :hover {
    background-color: #008db8;
  }
`;

export const BigBlueButton = styled(BlueButton)`
  width: calc(100% - 40px);
  box-sizing: border-box;
  font-weight: bold;
`;

export const BigBlueBottomButton = styled(BigBlueButton)`
  margin-bottom: 28px;
  margin-top: 10px;
`;

export const TopButton = styled.div`
  position: absolute;
  top: 28px;
  min-width: 24px;
  height: 24px;
  color: #0093bf;
  font-weight: bold;
  font-size: 15px;
`;

// TODO replace instances of other buttons that look like this
export const MinimalButton = styled.button`
  height: 45px;
  position: relative;
  cursor: pointer;
  margin: 0;
  padding: 0 25px;
  font-size: 15px;
  font-family: ${Fonts.DefaultBold};
  border: none;
  background-color: ${Colors.MountainMeadow};
  color: ${Colors.White};
  border-radius: 3px;

  :focus {
    outline: none;
  }

  :hover {
    background-color: ${Colors.LighterMountainMeadow};
  }
`;

export const TopRightButton = styled(TopButton)`
  right: 12px;
`;

export const TopLeftButton = styled(TopButton)`
  left: 12px;
`;

export const RedBorderButton = styled(Button)`
  border: 2px;
  border-style: solid;
  border-color: #cc0000;
  border-radius: 2px;
  background-color: #ffffff;
  color: #cc0000;
  font-size: 15px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const BlueBorderButton = styled(RedBorderButton)`
  border-color: #0093bf;
  color: #0093bf;
  background-color: transparent;
`;

export const MinusOrPlusButton = styled(Button)`
  border-style:solid;
  border-color:#3498db;
  border-width: 1px 1px 1px 1px;
  padding: 5px;
  margin: 0 10px;
  max-width: 30px;
  max-height: 30px;
  background-color:white;
  font-weight:normal;
  color:#3498db;
  &:first-child {
    margin-left: 0;
  }
  &:active:focus-within {
    background: #3498db;
    color: white;
  }
  &[disabled] {
    color: #c8c8c8;
    border-color: #c8c8c8;
    background-color: #eee;
  }
`;

export const BorderButton = styled.div`
  height: 34px;
  padding: 8px 12px 0px 12px;
  border: 1px solid ${Colors.Alto};
  border-radius: 3px;
  background-color: ${Colors.White};
  box-sizing: border-box;
  font-family: ${Fonts.DefaultBold};
  font-size: 14px;
  font-weight: 200;
  color: ${props => props.color || Colors.MountainMeadow};
  text-decoration: ${props => props.color || Colors.MountainMeadow};
  text-align: center;
  cursor: pointer;
  &:hover {
    border-color: ${props => props.color || Colors.MountainMeadow};
  }
`;

BorderButton.defaultProps = {
  /**
   * Color for button text, and border
   */
  color: Colors.MountainMeadow,
};

// It's a div, not a button!
export const GreenBorderButton = styled(BorderButton)``;
