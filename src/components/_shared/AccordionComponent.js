import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { Colors } from "../../constants/colors";
import { ListText } from "./TextComponents";

export const AccordionComponent = ({ children, headerName, defaultOpen }) => {
  const [selected, setSelected] = useState(defaultOpen);
  return (
    <div>
      <ListText style={{ margin: 0, padding: "16px 24px" }} onClick={() => setSelected(!selected)}>
        {headerName}
        {selected && (
          <FontAwesomeIcon icon={faCaretUp} style={{ color: Colors.BondiBlue }} size={"lg"} />
        )}
        {!selected && (
          <FontAwesomeIcon icon={faCaretDown} style={{ color: Colors.BondiBlue }} size={"lg"} />
        )}
      </ListText>
      {selected && children}
    </div>
  );
};
