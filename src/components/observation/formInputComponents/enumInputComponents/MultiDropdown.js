import React from "react";
import { Colors } from "../../../../constants/colors";
import { Field, InputLabel, InputLabelText, Select } from "../../../_shared/FormComponents";

const MultiDropdown = props => {
  const { fieldDef, observation, options, updateObField, disabled, required, valid } = props;

  const currentValue = observation[fieldDef.id] || [];
  const isRed = !valid || (required && currentValue === "");

  let label = fieldDef.label;

  if (required) {
    label += "*";
  }

  const handleChange = event => {
    event.preventDefault();

    let selectedOptions = [].filter.call(event.target.options, o => o.selected).map(o => o.value);

    updateObField(fieldDef, selectedOptions);
  };

  return (
    <Field>
      <InputLabel>
        <InputLabelText style={isRed ? { color: Colors.RedAlert } : null}>{label}</InputLabelText>

        {/* tool-tip icons are temporarily disabled until they're actually implemented */}
        {/*fieldDefinition.helpImage ? <FontAwesomeIcon color="#0093bf" icon={faInfoCircle} onClick={this.displayHelp.bind(this, fieldDefinition.id)} /> : null */}

        <Select
          disabled={disabled}
          style={{ height: "120px" }}
          multiple={true}
          className={isRed ? "error" : ""}
          required={required}
          value={currentValue}
          onChange={handleChange}
        >
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

export default MultiDropdown;
