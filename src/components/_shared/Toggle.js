import styled from "styled-components";
import { Colors } from "../../constants/colors";
import React from "react";
import { NonSelectableText } from "./TextComponents";
import PropTypes from "prop-types";

const ToggleWrapper = styled.div`
  width: ${props => props.width};
  height: ${props => props.height}px;
  background-color: ${props => props.backgroundColor};
  border-radius: ${props => props.height}px;
  border: 1px solid ${Colors.C};
  ${NonSelectableText};
`;

const ToggleSidesWrap = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  border-radius: ${props => props.size}px;
`;

const SwitchOuter = styled.div`
  position: relative;
  width: 30px;
  height: calc(100% - 2px);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const SwitchWrap = styled.div`
  position: absolute;
  height: 100%;
`;

const SwitchBase = styled.div`
  position: relative;
  background-color: ${Colors.WinterSky};
  border-radius: ${props => props.size}px;
  width: ${props => props.size * 1.7}px;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.2);
  border: 1px solid ${Colors.C};
  height: calc(100% + 2px);
  transform: translateY(-2px);
  display: flex;
  align-items: center;
`;

const SwitchHandle = styled.div`
  position: absolute;
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  background-color: ${props => props.backgroundColor};
  border-radius: ${props => props.size}px;
  border: 1px solid ${props => props.borderColor};
  transition: 0.3s ease-in-out;
  transform: ${props =>
    props.position ? `translateX(-2px)` : "translateX(" + props.size / 1.5 + "px)"};
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.5);
`;

const ToggleSwitch = props => {
  const { toggle, position, size, handleColor, borderColor } = props;
  return (
    <div style={{ height: size + "px" }}>
      <SwitchOuter onClick={toggle}>
        <SwitchWrap>
          <SwitchBase size={size}>
            <SwitchHandle
              size={size}
              backgroundColor={handleColor}
              position={position}
              borderColor={borderColor}
              onClick={toggle}
            />
          </SwitchBase>
        </SwitchWrap>
      </SwitchOuter>
    </div>
  );
};

const ToggleSide = styled.div`
  background-color: ${props => (props.active ? props.onColor : props.offColor)};
  color: ${props => (props.active ? Colors.White : Colors.DustyGray)};
  flex: 1;
  height: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  font-size: 14px;
  ${NonSelectableText};
  cursor: pointer;
  transition: 0.3s ease;
`;

const ToggleRight = styled(ToggleSide)`
  border-top-right-radius: ${props => props.height}px;
  border-bottom-right-radius: ${props => props.height}px;
`;
const ToggleLeft = styled(ToggleSide)`
  border-top-left-radius: ${props => props.height}px;
  border-bottom-left-radius: ${props => props.height}px;
`;

export const Toggle = props => {
  const {
    option1,
    option2,
    height,
    handleColor,
    selectedOption,
    onChange,
    handleBorderColor,
  } = props;

  const toggleSelection = () => {
    switch (selectedOption) {
      case option1: {
        onChange(option2);
        break;
      }
      case option2: {
        onChange(option1);
      }
    }
  };

  return (
    <ToggleSwitch
      size={height}
      handleColor={handleColor}
      borderColor={handleBorderColor}
      position={selectedOption === option1}
      toggle={toggleSelection}
    />
  );
};

export const ToggleWithLabels = props => {
  const {
    option1,
    option2,
    onColor,
    offColor,
    height,
    width,
    selectedOption,
    onChange,
    handleBorderColor,
  } = props;

  const toggleSelection = () => {
    switch (selectedOption) {
      case option1.value: {
        onChange(option2.value);
        break;
      }
      case option2.value: {
        onChange(option1.value);
      }
    }
  };

  return (
    <ToggleWrapper backgroundColor={onColor} width={width} height={height}>
      <ToggleSidesWrap size={height}>
        <ToggleLeft
          active={selectedOption === option1.value}
          onClick={() => onChange(option1.value)}
          height={height}
          onColor={onColor}
          offColor={offColor}
        >
          {option1.label}
        </ToggleLeft>
        <ToggleSwitch
          size={height}
          backgroundColor={onColor}
          borderColor={handleBorderColor}
          position={selectedOption === option1.value}
          toggle={toggleSelection}
        />
        <ToggleRight
          active={selectedOption === option2.value}
          onClick={() => onChange(option2.value)}
          height={height}
          onColor={onColor}
          offColor={offColor}
        >
          {option2.label}
        </ToggleRight>
      </ToggleSidesWrap>
    </ToggleWrapper>
  );
};

ToggleWithLabels.propTypes = {
  /**
   * Option one object containing the value and label
   */
  option1: PropTypes.exact({
    value: PropTypes.string,
    label: PropTypes.string,
  }).isRequired,
  /**
   * Option two object containing the value and label
   */
  option2: PropTypes.exact({
    value: PropTypes.string,
    label: PropTypes.string,
  }).isRequired,
  /**
   * Color of side when toggled on
   */
  onColor: PropTypes.string,
  /**
   * Color of side when toggled off
   */
  offColor: PropTypes.string,
  /**
   * Color of the border on the toggle handle.
   */
  handleBorderColor: PropTypes.string,
  /**
   * height in px
   */
  height: PropTypes.number,
  /**
   * width as a string (can be 100% or 100px etc)
   */
  width: PropTypes.string,
  /**
   * selected option must be one of the values of option1 or option2
   */
  selectedOption: PropTypes.string.isRequired,
  /**
   * on change function
   */
  onChange: PropTypes.func.isRequired,
};

ToggleWithLabels.defaultProps = {
  onColor: Colors.BondiBlue,
  offColor: Colors.White,
  handleBorderColor: Colors.DeepCerulean,
  height: 30,
  width: "100%",
};

Toggle.defaultProps = {
  handleColor: Colors.White,
  handleBorderColor: Colors.Ghost,
  height: 30,
  width: "100%",
};
