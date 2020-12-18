import React from "react";
import { Colors } from "../../../../constants/colors";
import { Field, InputLabel, InputLabelText, Select } from "../../../_shared/FormComponents";

const SingleDropdown = props => {
  const { fieldDef, observation, options, updateObField, required, disabled, valid } = props;

  const currentValue = observation[fieldDef.id] || "";
  const isRed = !valid || (required && currentValue === "");

  let label = fieldDef.label;

  if (required) {
    label += "*";
  }

  const handleChange = event => {
    let selectedOption = event.target.value;
    if (currentValue === selectedOption) {
      selectedOption = null;
    }
    updateObField(fieldDef, selectedOption);
  };

  return (
    <Field id={fieldDef.id}>
      <InputLabel>
        <InputLabelText style={isRed ? { color: Colors.RedAlert } : null}>{label}</InputLabelText>

        {/* tool-tip icons are temporarily disabled until they're actually implemented */}
        {/*fieldDefinition.helpImage ? <FontAwesomeIcon color="#0093bf" icon={faInfoCircle} onClick={this.displayHelp.bind(this, fieldDefinition.id)} /> : null */}

        <Select
          disabled={disabled}
          multiple={false}
          className={isRed ? "error" : ""}
          required={required}
          value={currentValue}
          onChange={handleChange}
        >
          <option value="" key="init">
            Select
          </option>

          {options.map(option => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      </InputLabel>
    </Field>
  );
};

export default SingleDropdown;
