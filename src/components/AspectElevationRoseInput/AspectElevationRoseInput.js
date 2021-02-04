import React from "react";
import PropTypes from "prop-types";
import { Colors } from "../../constants/colors";
import { Field, InputLabel, InputLabelText } from "../_shared/FormComponents";
import AspectElevationRoseSVG from "../_shared/AspectElevationRose/AspectElevationRoseSVG";

const AspectElevationRoseInput = props => {
  const { fieldDef, observation, required, updateObField, valid } = props;

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
        <InputLabelText style={{ float: "left", color: isRed ? Colors.RedAlert : "auto" }}>
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

AspectElevationRoseInput.propTypes = {
  fieldDef: PropTypes.shape({
    // id: PropTypes.string
  }),
  observation: PropTypes.shape({
    // state: PropTypes.string,
    // shareLevel: PropTypes.string,
    // character: PropTypes.string,
  }),
}

AspectElevationRoseInput.defaultProps = {
  fieldDef: {
    id: "location",
  },
  observation: {
    obDate: "10/29/2020",
    attachments: [],
    state: "SUBMITTED",
    workflowExecutionUUID: "ea1dd5a8-d696-474d-bcf7-f5fe1f1ede66",
    shareLevel: "PRIVATE",
    character: "STORM_SLAB",
    pwlUUID: "89ae4bec-dd2d-414e-9cf6-16b1a64c6c61",
    pwlName: "Halloween",
    distribution: "Isolated",
    sensitivity: "Unreactive",
    comment: "",
    location: '{"\'Alpine\'":[],"\'Treeline\'":["N","NE"],"\'Below Treeline\'":["N"]}',
    hazardChart: {
      x: {
        typical: 4,
        min: 2,
        max: 6,
      },
      y: {
        typical: 4,
        min: 2,
        max: 6,
      },
    },
    colour: "#FDD017",
    obTime: "10:38",
    locations: [
      {
        name: "Kemano Now Cast",
        type: "FORECAST_AREA",
        abbreviation: "KNC",
        description: "",
        parentUUID: "12a64944-ac37-4cf5-943b-681afdd6e634",
        externalID: "",
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [-127.82617234974167, 53.63155462125862],
              [-127.68369340687059, 53.630536699044626],
              [-127.68266343860887, 53.579609272269785],
              [-127.8107228258159, 53.575532424936426],
              [-128.09881781693548, 53.437130409319074],
              [-128.1661090767011, 53.48046630068426],
              [-127.82617234974167, 53.63155462125862],
            ],
          ],
        },
        operationUUID: "93a065f9-675f-45e9-a56c-7e68d3619599",
        mountainRangeUUIDs: ["781e2454-8d95-4945-b8c2-dac7264b9d0b"],
        photos: "",
        uuid: "c0d05449-216f-4568-8fc9-a9174ccebf9e",
      },
    ],
    uuid: "6d44daba-228b-4cad-888a-5b316c612a2a",
  },
  valid: true,
  // fieldDef: null,
  // observation: null,
  // required: null,
  // valid: null,
  updateObField: () => { }
}
