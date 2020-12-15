import { RowContainer } from "../../ContainerComponents";
import React from "react";
import styled from "styled-components";
import { getWorkflowExecutionStepNames } from "../../../../selectors/workflowSelectors";
import { connect } from "react-redux";
import { Colors } from "../../../../constants/colors";
import { Fonts } from "../../../../constants/fonts";

const Wrapper = styled(RowContainer)`
  height: 45px;
  width: 100%;
  cursor: pointer;
  border-bottom: 1px solid ${Colors.EbonyClay};
  color: ${props => (props.active ? "#5C7284" : Colors.White)};
  background-color: ${props => (props.active ? Colors.Concrete : Colors.Eden)};
  transition: 0.2s ease-in-out;

  :hover {
    ${props =>
      !props.active &&
      `
        background-color: ${Colors.DarkElectricBlue};
      `}}
  }
`;

const LeftBar = styled.div`
  height: 100%;
  min-width: 8px;
  background-color: ${props => (props.active ? Colors.DeepCerulean : Colors.Eden)};
  transition: 0.2s ease-in-out;
  ${Wrapper}:hover & {
    ${props =>
      !props.active &&
      `
        background-color: ${Colors.Cerulean};
      `}
  }
`;

const StepNumber = styled.div`
  height: 100%;
  min-width: 45px;
  display: flex;
  color: ${props => (props.active ? Colors.RiverBed : Colors.White)};
  align-items: center;
  justify-content: center;
  font-family: ${Fonts.DefaultBlack};
  margin-left: -6px;
`;

const StepName = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  padding: 0 5px;
  width: 100%;
  font-size: 14px;
`;

const WorkflowStepTileComponent = props => {
  const { stepNumber, stepName, isActive, onClick } = props;
  return (
    <Wrapper active={isActive} onClick={onClick}>
      <LeftBar active={isActive} />
      <StepNumber active={isActive}>{stepNumber}</StepNumber>
      <StepName>{stepName}</StepName>
    </Wrapper>
  );
};

const mapStateToProps = state => ({
  stepNames: getWorkflowExecutionStepNames(state),
});

export const WorkflowStepTile = connect(mapStateToProps)(WorkflowStepTileComponent);

export default WorkflowStepTile;
