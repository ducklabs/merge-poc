import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { ColumnContainer, HorizontalLine } from "../../ContainerComponents";
import { Colors } from "../../../../constants/colors";
import {
  getCurrentWorkflowExecution,
  getStepIndex,
  getWorkflowExecutionStepNames,
} from "../../../../selectors/workflowSelectors";
import { setStepIndex } from "../../../../actions/workflowActions";
import WorkflowStepTile from "./WorkflowStepTile";
import { Fonts } from "../../../../constants/fonts";
import FadeIn from "react-fade-in";

const Wrapper = styled.div`
  width: 100%;
  max-height: ${props => (props.open ? `100%` : 0)};
  overflow: hidden;
`;

const DetailsWrap = styled.div`
  background-color: ${Colors.Eden};
  padding: 10px;
`;

const DetailsBox = styled(ColumnContainer)`
  padding: 10px 15px;
  border: 1px solid ${Colors.DeepSeaGreen};
  font-size: 14px;
`;

const WorkflowName = props => {
  const { location, workflowName } = props;
  return (
    <DetailsWrap>
      <DetailsBox>
        <div style={{ color: Colors.White, fontFamily: Fonts.DefaultBold }}>{workflowName}</div>
        <div style={{ margin: "7px 0" }}>
          <HorizontalLine color={Colors.SurfieGreen} />
        </div>
        <div style={{ color: Colors.PictonBlue }}>{location}</div>
      </DetailsBox>
    </DetailsWrap>
  );
};

const WorkflowStepSelectorComponent = props => {
  const { stepNames, setStepIndex, stepIndex, workflowExecution } = props;
  return (
    <Wrapper open={workflowExecution}>
      {stepNames.length && (
        <FadeIn>
          <WorkflowName location={"Kemano T2"} workflowName={"AM Hazard Forecast"} />
          {stepNames.map((name, index) => (
            <WorkflowStepTile
              stepNumber={index + 1}
              stepName={name}
              key={index}
              onClick={() => setStepIndex(index)}
              isActive={stepIndex === index}
            />
          ))}
        </FadeIn>
      )}
    </Wrapper>
  );
};

const mapStateToProps = state => ({
  workflowExecution: getCurrentWorkflowExecution(state),
  stepNames: getWorkflowExecutionStepNames(state),
  stepIndex: getStepIndex(state),
});

const mapDispatchToProps = dispatch => ({
  setStepIndex: index => dispatch(setStepIndex(index)),
});

export const WorkflowStepSelector = connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkflowStepSelectorComponent);

export default WorkflowStepSelector;
