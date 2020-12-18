import React from "react";
import { SegmentedControl } from "../SegmentedControl";
import { Colors } from "../../../../constants/colors";
import { Field, InputLabel, InputLabelText } from "../../../_shared/FormComponents";

const SingleSeg = props => {
  const { fieldDef, observation, options, updateObField, disabled, required, valid } = props;

  const currentValue = observation[fieldDef.id] || "";
  const isRed = !valid || (required && currentValue === "");

  let label = fieldDef.label;

  if (required) {
    label += "*";
  }

  const handleChange = (event, val) => {
    event.preventDefault();
    let selectedOption;
    if (val === currentValue) {
      selectedOption = undefined;
    } else {
      selectedOption = val;
    }
    updateObField(fieldDef, selectedOption);
  };

  return (
    <Field>
      <InputLabel>
        <InputLabelText style={isRed ? { color: Colors.RedAlert } : null}>{label}</InputLabelText>

        {/* tool-tip icons are temporarily disabled until they're actually implemented */}
        {/*fieldDefinition.helpImage ? <FontAwesomeIcon color="#0093bf" icon={faInfoCircle} onClick={this.displayHelp.bind(this, fieldDefinition.id)} /> : null */}

        <SegmentedControl
          disabled={disabled}
          className={isRed ? "error" : ""}
          options={options}
          handleChange={handleChange}
          fieldId={fieldDef.id}
          currentValue={currentValue}
        />
      </InputLabel>
    </Field>
  );
};

export default SingleSeg;
