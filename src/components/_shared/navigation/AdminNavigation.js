import React, { useEffect, useState } from "react";

import { Colors } from "../../../constants/colors";
import { NavGroup, NavGroupTitle, SectionButton } from "../NavigationComponents";
import { HelpIcon, ResourcesIcon, SettingsIcon } from "../../../res/img/icons";
import { getUserName } from "../../../selectors/accountSelectors";
import { connect } from "react-redux";
import { selectOperation } from "../../../actions/operationActions";
import { logoutAction } from "../../../actions/accountActions";

// TODO: Dru change this icon!!
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat, faSkiing } from "@fortawesome/free-solid-svg-icons";

const AdminNavigationComponent = props => {
  const { user, logout, selectOperation } = props;
  const [signOut, setSignOut] = useState(false);

  // TODO: When we do the logout story we can extract this useeffect and put it into the logout button
  useEffect(() => {
    if (signOut) {
      logout();
      selectOperation("");
    }
  });

  return (
    <NavGroup style={{ alignSelf: "flex-end", marginTop: "auto", width: "100%" }}>
      <NavGroupTitle>Admin</NavGroupTitle>
      <SectionButton
        isAdminSection
        to={"/settings"}
        label={"settings"}
        icon={<SettingsIcon size={28} color={Colors.CuriousBlue} />}
      />
      <SectionButton
        isAdminSection
        to={"/resources"}
        label={"resources"}
        icon={<ResourcesIcon size={28} color={Colors.CuriousBlue} />}
      />
      <SectionButton
        isAdminSection
        to={"/help"}
        label={"help"}
        icon={<HelpIcon size={28} color={Colors.CuriousBlue} />}
      />
      <SectionButton
        isAdminSection
        to={"/profile"}
        label={`${user.firstName} ${user.lastName}`}
        icon={
          // TODO: Dru change this icon
          <FontAwesomeIcon
            icon={faCat}
            style={{ width: 28, height: 28 }}
            color={Colors.CuriousBlue}
          />
        }
      />

      <SectionButton
        // TODO: Dru sign out button is temporary until we have a user story for it.
        isAdminSection
        to={"/"}
        label={"Sign out"}
        onClick={() => setSignOut(true)}
        icon={
          <FontAwesomeIcon
            className={"fa-flip-horizontal"}
            icon={faSkiing}
            style={{ width: 28, height: 28 }}
            color={Colors.CuriousBlue}
          />
        }
      />
    </NavGroup>
  );
};

const mapStateToProps = state => ({
  user: getUserName(state),
});
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutAction()),

  selectOperation: operationUUID => dispatch(selectOperation(operationUUID)),
});
export const AdminNavigation = connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminNavigationComponent);

export default AdminNavigation;
