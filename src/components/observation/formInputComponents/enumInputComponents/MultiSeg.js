import React from "react";
import { SegmentedControl } from "../SegmentedControl";
import { Colors } from "../../../../constants/colors";
import { Field, InputLabel, InputLabelText } from "../../../_shared/FormComponents";

const MultiSeg = props => {
  const { fieldDef, observation, options, updateObField, disabled, required, valid } = props;

  const currentValue = observation[fieldDef.id] || [];
  const isRed = !valid || (required && currentValue === "");

  let label = fieldDef.label;

  if (required) {
    label += "*";
  }

  const handleChange = (event, val) => {
    event.preventDefault();
    let selectedOptions;

    if (currentValue.includes(val)) {
      // Remove it
      let i = currentValue.indexOf(val);
      // make a copy of currentValue because splice is impure.
      selectedOptions = [...currentValue];
      selectedOptions.splice(i, 1);
      if (selectedOptions.length === 0) selectedOptions = null;
    } else {
      // Add it (can't use push because it's impure)
      selectedOptions = Array.prototype.concat(currentValue, [val]);
    }

    updateObField(fieldDef, selectedOptions);
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

export default MultiSeg;
