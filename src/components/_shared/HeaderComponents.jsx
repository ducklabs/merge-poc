import React from "react";
import { connect } from "react-redux";
import { Offline, Online } from "./OfflineOnlineDetectorComponents";
import styled from "styled-components";
import { HeaderText } from "./TextComponents";
import { TopRightButton, TopLeftButton } from "../_shared/ButtonComponents";
import { faTimes, faChevronLeft, faWifi, faSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Colors } from "../../constants/colors";
import config from "../../config";
import { getAccountLevel } from "../../selectors/accountSelectors";
import { Fonts } from "../../constants/fonts";
import packageJSON from "../../../package.json";

const ProductionEnvironment = styled.div`
  position: absolute;
  left: 6px;
  top: 82px;
  font-size: 0.5em;
`;
export const StyledHeader = styled.div`
  align-items: center;
  height: 120px;
  height: 68px;
  background-color: ${Colors.WinterSky};
`;

export const OfflineOnlineStyle = styled.div`
  height: 32px;
  font-size: 12px;
  color: #fff;
  background-size: cover;
  font-family: ${Fonts.DefaultBold};
  font-weight: bold;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
`;

export const OfflineStyle = styled(OfflineOnlineStyle)`
  background-color: ${Colors.LimedSpruce};
`;

export const OnlineStyle = styled(OfflineOnlineStyle)`
  background-color: ${Colors.Supernova};
  color: ${Colors.LimedSpruce};
`;

export const Header = ({ headerText, children }) => (
  <StyledHeader>
    <HeaderText>{headerText}</HeaderText>
    {children}
  </StyledHeader>
);

export const BackButtonX = ({ onClick }) => (
  <TopRightButton onClick={onClick}>
    <FontAwesomeIcon icon={faTimes} size={"lg"} />
  </TopRightButton>
);

export const BackButtonChevron = ({ onClick }) => (
  <TopLeftButton onClick={onClick}>
    <FontAwesomeIcon icon={faChevronLeft} />
  </TopLeftButton>
);

export const SaveButton = ({ onClick }) => (
  <TopRightButton onClick={onClick}>{"Save"}</TopRightButton>
);

export const CancelButton = ({ onClick }) => (
  <TopLeftButton onClick={onClick}>Cancel</TopLeftButton>
);

export const LogoutButton = ({ onClick }) => (
  <TopLeftButton onClick={onClick}>Logout</TopLeftButton>
);

export const OperationButton = ({ onClick }) => (
  <TopRightButton onClick={onClick}>{"Operation"}</TopRightButton>
);

export const ProductionEnvironmentLabel = () => (
  <ProductionEnvironment>{config.PRODUCTION_ENVIRONMENT}</ProductionEnvironment>
);

const TinyVersionNumber = styled.div`
  position: absolute;
  left: 6px;
  top: 72px;
  font-size: 0.5em;
`;

const OfflineOnlineComponentContent = props => {
  const { accountLevel } = props;
  return (
    <div>
      <TinyVersionNumber>v{packageJSON.version}</TinyVersionNumber>
      {accountLevel && accountLevel.accountLevel === 10000 ? <ProductionEnvironmentLabel /> : null}
      <Online>
        <OnlineStyle>
          <FontAwesomeIcon icon={faWifi} style={{ padding: "8px" }} />
          <div>WORKING ONLINE</div>
        </OnlineStyle>
      </Online>
      <Offline>
        <OfflineStyle>
          <span className="fa-layers fa-fw" style={{ padding: "8px" }}>
            <FontAwesomeIcon icon={faWifi} />
            <FontAwesomeIcon icon={faSlash} />
          </span>
          <div>WORKING OFFLINE</div>
        </OfflineStyle>
      </Offline>
    </div>
  );
};

const mapStateToProps = state => ({
  accountLevel: getAccountLevel(state),
});

export const OfflineOnlineComponent = connect(mapStateToProps)(OfflineOnlineComponentContent);
