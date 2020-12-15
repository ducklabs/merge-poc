import styled from "styled-components";
import { Colors } from "../../constants/colors";
import { Fonts } from "../../constants/fonts";
import { Button } from "./FormComponents";
import { isMobile } from "react-device-detect";

/**
 * Mobile
 */
// Z-INDEX 100 to float above the desktop navSideBar (z-index:1) and operationSelection (z-index: 10) components
export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 100;
`;
export const ModalInnerWrap = styled.div`
  ${isMobile &&
    `
    height: 100%;
    display: flex;
    flex-direction: column;
  `}
`;
export const ModalContent = styled.div`
  position: fixed;
  background: #f2f5f7;
  width: 90%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 95%;
  display: flex;
  flex-direction: column;
`;

export const MainModalContent = styled.div`
  margin: 0px 0px;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  text-align: center;
`;

export const CloseButtonContainer = styled.div`
  ${isMobile
    ? `position: absolute;
  top: 24px;
  right: 24px;
  font-size: 32px;
  z-index: 9999;
  * {
    color: #0093bf;
  }`
    : `position: absolute;
  right: 0;
  top: 0;
  padding: 10px;`}
`;

/**
 * Desktop
 */
export const ModalBlackout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 700;
`;

export const ModalDiv = styled.div`
  background-color: white;
  border-radius: 9px;
  box-shadow: 0px 0px 70px -30px rgba(0, 0, 0, 0.75);
  position: fixed;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  z-index: 999;
  max-height: 90vh;

  ${isMobile
    ? `
        height: 90vh;
        width: 90vw;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    `
    : `
        padding: 35px;
    `}
`;

export const ModalWarning = styled.div`
  font-size: 15px;
`;

export const ModalTitle = styled.div`
  color: ${Colors.Mandy};
  font-family: ${Fonts.DefaultBold};
`;

export const ButtonGroup = styled.div`
  display: grid;
  grid-row-gap: 10px;
  grid-template-columns: 130px;
`;

export const ModalOKButton = styled(Button)`
  justify-content: center;
  background-color: ${Colors.DeepCerulean};
  color: white;
  border: none;

  :hover {
    border: none;
    background-color: ${Colors.Cerulean};
  }
`;

export const ModalCancelButton = styled(Button)`
  justify-content: center;
  border: 1px solid ${Colors.WinterSky};
  color: ${Colors.GullGray};
  :hover {
    color: ${Colors.Lynch};
    border: 1px solid ${Colors.WinterSky};
  }
`;
