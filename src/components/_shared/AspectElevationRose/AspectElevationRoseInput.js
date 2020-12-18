import React from "react";
import {Colors} from "../../../constants/colors";
import {Field, InputLabel, InputLabelText} from "../FormComponents";
import AspectElevationRoseSVG from "./AspectElevationRoseSVG";

const AspectElevationRoseInput = props => {
  const {fieldDef, observation, required, updateObField, valid} = props;

  const currentValue = observation[fieldDef.id]
    ? JSON.parse(observation[fieldDef.id])
    : {
      "'Below Treeline'": [],
      "'Treeline'": [],
      "'Alpine'": [],
    };

  const handleChange = (elevation, aspect) => {
    let value = Object.assign({}, currentValue);
    value[elevation].includes(aspect)
      ? (value[elevation] = value[elevation].filter(a => a !== aspect))
      : value[elevation].push(aspect);
    updateObField(fieldDef, JSON.stringify(value));
  };

  const isSelected = elevation => {
    if (elevation !== undefined && elevation.length > 0) {
      return true;
    }
  };

  const isRed = !valid || (required && !Object.values(currentValue).some(isSelected));
  let label = fieldDef.label;
  if (required) {
    label += "*";
  }

  return (
    <Field key={fieldDef.id}>
      <InputLabel>
        <InputLabelText style={{float: "left", color: isRed ? Colors.RedAlert : "auto"}}>
          {label}
        </InputLabelText>
      </InputLabel>
      <AspectElevationRoseSVG
        value={currentValue}
        required={required}
        handleChange={handleChange}
      />
    </Field>
  );
};

export default AspectElevationRoseInput;

AspectElevationRoseInput.defaultProps = {
  // fieldDef: null,
  // observation: null,
  // required: null,
  // valid: null,
  updateObField: () => {}
}
