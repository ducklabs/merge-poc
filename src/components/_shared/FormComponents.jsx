import React from "react";
import styled from "styled-components";
import { Fonts } from "../../constants/fonts";
import { Colors } from "../../constants/colors";
import { CaretIcon, CheckIcon, MagnifyingGlassIcon } from "../../res/img/icons";
import { RowContainer } from "./ContainerComponents";
import PropTypes from "prop-types";

export const Input = styled.input`
  width: ${props => (props.width ? props.width : "100%")};
  height: ${props => (props.height ? props.height : " 40px")};
  padding: 0px 10px;
  border: 1px solid #c8c8c8;
  border-radius: 2px;
  background-color: #ffffff;
  background-size: cover;
  font-family: ${Fonts.Default};
  font-size: 16px;
  color: #777777;
  text-decoration: none solid rgb(119, 119, 119);
  box-sizing: border-box;
  &[disabled] {
    background-color: #eee;
  }
`;

export const TextField = styled.input`
  box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.2);
  padding: 0px 15px;
  font-family: ${Fonts.Default};
  font-size: 14px;
  border: 1px solid ${Colors.Botticelli};
  text-decoration: none solid rgb(0, 0, 0);
  height: ${props => (props.height ? props.height : `auto`)};
  width: ${props => (props.width ? props.width : `auto`)};

  :focus {
    outline: none;
  }
`;

TextField.propTypes = {
  /**
   * Height of the field using any metric
   */
  height: PropTypes.string,
  /**
   * Width of the field using any metric
   */
  width: PropTypes.string,
};

export const SearchField = props => {
  return (
    <RowContainer style={{ alignItems: "center", width: "230px" }}>
      <TextField
        {...props}
        height={"36px"}
        width={"200px"}
        style={{ padding: "0px 35px 0 15px" }}
      />
      <MagnifyingGlassIcon style={{ transform: "translateX(-28px)" }} />
    </RowContainer>
  );
};

//TODO MJ Make story
export const DropdownHeader = props => {
  const { label, isOpen, setOpen, color, hoverColor } = props;

  return (
    <RowContainer style={{ alignItems: "center" }}>
      <span style={{ fontSize: "18px" }}>{label}</span>
      <CaretIcon
        onClick={() => setOpen(!isOpen)}
        style={{
          transition: "0.2s ease-in-out",
          transform: "rotate(180deg)",
          padding: "0 18px",
          cursor: "pointer",
        }}
        color={color || Colors.Cerulean}
        hoverColor={hoverColor || Colors.White}
      />
    </RowContainer>
  );
};

export const LoginInput = styled.input`
  width: calc(100% - 48px);
  height: 40px;
  padding: 0px 10px;
  margin: 10px 0px 15px;
  border: none;
  border-radius: 0;
  border: 0;
  outline: 0;
  border-bottom: 1px solid #c8c8c8;
  background-color: #ffffff;
  background-size: cover;
  font-family: ${Fonts.Default};
  font-size: 16px;
  color: #52595d;
  text-decoration: none solid rgb(119, 119, 119);
  box-sizing: border-box;
`;

export const InputLabel = styled.label`
  width: 100%;
  color: #38464e;
  font-weight: 600;
  text-align: left;
  margin: 2px 0 15px;
`;

export const InputLabelText = styled.div`
  font-family: ${Fonts.Default};
  font-size: 13px;
  color: #38464e;
  font-weight: 600;
  text-decoration: none solid rgb(56, 70, 78);
  padding-bottom: 3px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Checkbox = styled.input`
  height: 20px;
`;

export const Select = styled.select`
  width: 100%;
  height: 40px;
  padding: 0px 8px 0px 10px;
  border: 1px solid #c8c8c8;
  border-radius: 2px;
  font-family: ${Fonts.Default};
  font-size: 16px;
  color: #52595d;
  font-weight: 400;
  text-decoration: none solid rgb(82, 89, 93);
  background-color: white;
`;

const StyledField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 16px;
`;

export const InputWithUnit = styled.div`
  display: flex;
  flex-direction: row-;
  align-items: center;
  justify-content: flex-start;
`;

export const ObForm = styled.form`
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: auto;
  flex-direction: column;
  background-color: #f2f5f7;
  background-size: cover;
`;

export const Unit = styled.div`
  height: 16px;
  font-family: ${Fonts.Default};
  font-size: 14px;
  color: #52595d;
  text-decoration: none solid rgb(82, 89, 93);
  display: flex;
  align-contents: center;
  padding-left: 8px;
`;

export const LongText = styled.textarea`
  width: ${props => (props.width ? props.width : "100%")};
  min-height: ${props => (props.height ? props.height : " 40px")};
  padding: 0px 10px;
  border: 1px solid #c8c8c8;
  border-radius: 2px;
  background-color: #ffffff;
  background-size: cover;
  font-family: ${Fonts.Default};
  font-size: 16px;
  color: #777777;
  text-decoration: none solid rgb(119, 119, 119);
  box-sizing: border-box;
`;

export const Button = styled.div`
  cursor: pointer;
  display: flex;
  flex-display: row;
  border-radius: 3px;
  border: 1px solid ${props => (props.borderColour ? props.borderColour : Colors.D)};
  background-color: ${props => props.colour};
  padding: 10px;
  color: ${Colors.MountainMeadow};
  font-family: ${Fonts.DefaultBold};

  :hover {
    border: 1px solid green;
  }
`;

export const Field = ({ children, id }) => <StyledField data-cy={id}>{children}</StyledField>;

const CheckBoxWrapper = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 3px;
  border: 1px solid ${Colors.DevilGray};
  background-color: ${props => (props.checked ? props.checkedColor : props.uncheckedColor)};
  transition: background-color 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Fader = styled.div`
  opacity: ${props => (props.checked ? 1 : 0)};
  transition: opacity 0.2s ease-in-out;
`;

export const CheckBox = props => {
  const { checked, checkedColor, uncheckedColor, onClick } = props;

  return (
    <CheckBoxWrapper
      checkedColor={checkedColor}
      uncheckedColor={uncheckedColor}
      checked={checked}
      onClick={onClick}
    >
      <Fader checked={checked}>
        <CheckIcon color={Colors.White} size={14} weight={"light"} />
      </Fader>
    </CheckBoxWrapper>
  );
};

CheckBox.defaultProps = {
  checkedColor: Colors.BondiBlue,
  uncheckedColor: Colors.White,
};
