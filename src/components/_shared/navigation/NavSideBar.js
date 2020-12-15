import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Colors } from "../../../constants/colors";
import Logo from "../../../res/img/InfoEx_Logo_Full.png";
import { NavGroup, SectionButton } from "../NavigationComponents";
import AdminNavigation from "./AdminNavigation";
import {
  BinocularsIcon,
  CaretIcon,
  PencilIcon,
  ReportIcon,
  WorkflowIcon,
} from "../../../res/img/icons";
import { ButtonFlipper } from "../../workflow/_shared/InputComponents";
import WorkflowStepSelector from "./workflow/WorkflowStepSelector";
import { RowContainer } from "../ContainerComponents";
import { pauseWorkflow } from "../../../actions/workflowActions";
import { getCurrentOperationUUID } from "../../../selectors/operationSelectors";
import { Fonts } from "../../../constants/fonts";
import { Scrollbars } from "react-custom-scrollbars";

const SelectOperationMessage = styled.div`
  padding: 20px;
  margin: 125px 15px 0;

  border: 1px solid #008db8;
  background-color: #202631;
  background-size: cover;

  font-family: ${Fonts.Default};
  font-size: 20px;
  color: #26ace2;
  text-align: center;
}
`;

const Wrapper = styled.div`
  position: fixed;
  overflow: hidden;
  background-color: ${Colors.MidnightExpress};
  transition: 0.2s ease-in-out;
  width: ${props => (props.isOpen ? `230px` : `50px`)};
`;

const OuterWrapper = styled(Wrapper)`
  height: 100vh;
`;

// When the page content is long enough, we want the navbar to appear "sticky" while scrolling.
// This wrapper is to ensure content doesnt go below the fixed position navbar.
const WrapperHelper = styled(RowContainer)`
  height: 100%;
  width: ${props => (props.isOpen ? `230px` : `50px`)};
  transition: 0.2s ease-in-out;
`;

// Used for making the elements stay put when the accordion is shrunk.
const InnerWrapper = styled.div`
  width: 230px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const LogoImg = styled.img`
  width: 110px;
  margin: 15px 0 70px 10px;
`;

const CollapseButton = styled.button`
  transition: 0.2s ease-in-out;
  width: 30px;
  height: 30px;
  border-radius: 30px;
  background-color: white;
  border: 1px solid ${Colors.GullGray};
  margin: 25px 0 30px 0;
  position: absolute;
  left: ${props => (props.isOpen ? `215px` : `35px`)};
  z-index: 11;
  display: flex;
  justify-content: center;
  align-items: center;

  transform: translateY(52px) rotate(-90deg);

  :focus {
    outline: none;
  }
`;

const ScrollBar = styled.div`
  background-color: ${Colors.GullGray};
  width: 10px;
  border-radius: 10px;
  position: relative;
  z-index: 5;
  transition: background-color 0.2s ease-in-out;
  :active {
    background-color: ${Colors.DarkElectricBlue};
  }
`;

const Collapser = props => {
  const { isOpen, toggleOpen } = props;

  return (
    <CollapseButton onClick={toggleOpen} isOpen={isOpen}>
      <ButtonFlipper open={isOpen}>
        <CaretIcon size={25} color={Colors.GullGray} />
      </ButtonFlipper>
    </CollapseButton>
  );
};

const NavSideBarComponent = props => {
  const { selectedOperation, pauseWorkflow } = props;
  const [isOpen, setOpen] = useState(true);

  const mainNavigation = (
    <NavGroup>
      <SectionButton
        to={"/workflow"}
        label={"workflows"}
        icon={<WorkflowIcon size={28} color={Colors.CuriousBlue} />}
        style={{ boxShadow: `0px 3px 5px rgba(0, 0, 0, 0.3)` }}
        onClick={pauseWorkflow}
      />
      <WorkflowStepSelector />
      <SectionButton
        to={"/observationsHome"}
        label={"observations"}
        icon={<BinocularsIcon size={28} color={Colors.CuriousBlue} />}
      />
      <SectionButton
        to={"/reports"}
        label={"reports"}
        icon={<ReportIcon size={28} color={Colors.CuriousBlue} />}
      />
      <SectionButton to={"/draw"} label={"arts & crafts"} icon={<PencilIcon size={28} />} />
    </NavGroup>
  );
  const selectOperationMessage = (
    <SelectOperationMessage>To continue, please select an operation</SelectOperationMessage>
  );
  return (
    <RowContainer>
      <RowContainer style={{ position: "fixed" }}>
        <OuterWrapper isOpen={isOpen}>
          {/*<FixedWrap>*/}
          <div style={{ display: "flex" }}>
            <Wrapper isOpen={isOpen}>
              <InnerWrapper>
                <LogoImg src={Logo} alt={"InfoEx Logo"} />
                <div style={{ overflow: "hidden", height: "calc(100vh - 124px)" }}>
                  <Scrollbars autoHide renderThumbVertical={props => <ScrollBar {...props} />}>
                    <InnerWrapper>
                      {selectedOperation && mainNavigation}
                      {!selectedOperation && selectOperationMessage}
                      <AdminNavigation />
                    </InnerWrapper>
                  </Scrollbars>
                </div>
              </InnerWrapper>
            </Wrapper>
          </div>
          {/*</FixedWrap>*/}
        </OuterWrapper>
        <WrapperHelper isOpen={isOpen} />
      </RowContainer>
      <Collapser isOpen={isOpen} toggleOpen={() => setOpen(!isOpen)} />
      <WrapperHelper isOpen={isOpen} />
    </RowContainer>
  );
};

const mapStateToProps = state => ({
  selectedOperation: getCurrentOperationUUID(state),
});

const mapDispatchToProps = dispatch => ({
  pauseWorkflow: () => dispatch(pauseWorkflow()),
});

export const NavSideBar = connect(mapStateToProps, mapDispatchToProps)(NavSideBarComponent);

export default NavSideBar;
