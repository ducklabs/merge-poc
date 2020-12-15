import styled, { css } from "styled-components";
import { Colors } from "../../constants/colors";
import { Fonts } from "../../constants/fonts";

export const NonSelectableText = css`
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
`;

export const HeaderText = styled.div`
  font-family: ${Fonts.DefaultBold};
  font-size: 14px;
  color: #38464e;
  font-weight: 600;
  padding-top: 30px;
  margin: 0;
  height: 19px;
  text-align: center;
`;
export const TitleText = styled.div`
  font-family: ${Fonts.DefaultBold};
  font-size: 20px;
  color: #333333;
  font-weight: 600;
  text-align: left;
  padding: 25px 25px;
`;

export const LocationSelectText = styled.div`
  color: #38464e;
  font-size: 14px;
  text-align: left;
  padding: 0px 25px;
  display: flex;
  flex: 1;
`;

export const LocationSelectedText = styled.div`
    background-color:white
    text-align: left;
    font-size: 14px;
    color: ${Colors.Abbey};
    text-decoration: none solid rgb(82, 89, 93);
    margin:24px 0px;
    display: flex;
    justify-content:space-between;
    width: calc(100% - 48px);
    padding-left: 24px;
`;

export const LocationsRowDiv = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-radius: 2px;
  background-size: cover;
`;

export const MenuText = styled.div`
  font-family: ${Fonts.DefaultBold};
  font-size: 16px;
  color: ${Colors.BondiBlue};
  text-decoration: none solid rgb(71, 71, 71);
`;

export const ObservationsSelection = styled(MenuText)`
  text-align: left;
  padding: 15px 0 15px;
  border-bottom: 1px solid #d1d1d1;
  margin: 0 20px 0 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const ListText = styled.div`
  font-family: ${Fonts.Default};
  font-size: 15px;
  color: #474747;
  text-decoration: none solid rgb(71, 71, 71);
  text-align: left;
  padding: 15px 0 15px;
  border-bottom: 1px solid #d1d1d1;
  margin: 0 20px 0 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ModalQuestion = styled.span`
  color: ${Colors.LimedSpruce};
  font-size: 20px;
  font-family: ${Fonts.DefaultBold};
  text-align: "center";
`;

export const ModalResponse = styled.div`
  color: ${Colors.Abbey};
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const SemiBold = styled.span`
  font-family: ${Fonts.DefaultBold};
`;

export const ShareText = styled.div`
  color: ${Colors.Tenor};
  height: 16px;
  font-size: 10px;
  font-weight: 900;
  text-decoration: none solid rgb(119, 119, 119);
  text-transform: uppercase;
  padding: 3px 0 10px 0;
  font-family: ${Fonts.DefaultBold};
`;

export const LabelText = styled.div`
  font-family: ${Fonts.DefaultBold};
  font-size: 14px;
  color: ${Colors.Gothic};
  ${NonSelectableText}
`;
