import React from "react";
import OperationBar from "./navigation/OperationBar";
import { ColumnContainer, RowContainer } from "./ContainerComponents";
import NavSideBar from "./navigation/NavSideBar";
import { Colors } from "../../constants/colors";

export const DesktopLayout = ({ children }) => {
  return (
    <RowContainer>
      <NavSideBar />
      {/*Height restricted to avoid multiple scrollbars.*/}
      <ColumnContainer
        style={{ height: "100vh", overflow: "hidden", backgroundColor: Colors.Concrete }}
      >
        <OperationBar />

        {/*Height is the height of the screen minus the height of the top bar.*/}
        <div
          style={{
            width: "100%",
            overflow: "auto",
            height: "calc(100vh - 60px)",
            position: "relative",
          }}
        >
          {children}
        </div>
      </ColumnContainer>
    </RowContainer>
  );
};
