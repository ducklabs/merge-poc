import React from "react";
import PropTypes from "prop-types";
import { BorderButton as BorderButtonM } from '../_shared/ButtonComponents.jsx'
import { Colors } from "../../constants/colors";
import { Fonts } from "../../constants/fonts";

export default function BorderButton(props) {
  return (
    <BorderButtonM {...props}>
      {props.children}
    </BorderButtonM>
  );
}

// prop types can be set here for example
// disabled: PropTypes.bool
BorderButton.propTypes = {
  /**
  * @uxpinpropname Label
  */
  children: PropTypes.string,
};
