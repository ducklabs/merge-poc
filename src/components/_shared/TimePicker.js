import React from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";

const TimeTextField = styled(TextField)`
  height: 100%;
  display: flex;
  justify-content: center;

  input {
    font-family: Roboto;
    font-size: 14px;
    width: 115px;
    padding: 0 5px;
  }
`;

export default function TimePickers(props) {
  const { value, updateTime } = props;
  return (
    <TimeTextField
      id="time"
      type="time"
      value={value}
      InputLabelProps={{
        shrink: true,
      }}
      InputProps={{
        disableUnderline: true,
      }}
      inputProps={{
        step: 60, // 1 min
      }}
      onChange={event => updateTime(event.target.value)}
    />
  );
}

TimePickers.propTypes = {
  /**
   * Value of controlled component in 'HH:mm'
   */
  value: PropTypes.string,
  /**
   * Function that takes time as a string 'HH:mm'
   */
  updateTime: PropTypes.func,
};
