/**
 * This structure of fields as objects with a set of properties is supposed to model the
 * ones used in our Observation package - if this works OK for validating avalanche problems
 * with a custom hook, then maybe we can extend that design pattern to the Observation
 * package also :)
 */

export const avProbValidationRules = {
  fields: [
    {
      id: "character", // Yeah, "Type of Problem" is stored in the "character" attribute on a problem object :/
      label: "Type of Problem",
      required: true,
    },
    {
      id: "pwlUUID", // Yeah, "Failure Plane" is "pwlUUID" on the av-prob object.
      label: "Failure Plane",
      required: true,
    },
    {
      id: "distribution",
      label: "Distribution",
      required: true,
    },
    {
      id: "sensitivity",
      label: "Sensitivity",
      required: true,
    },
    {
      id: "typicalSize",
      label: "Typical Size",
      required: true,
    },
    {
      id: "typicalDepth",
      label: "Typical Depth",
      subFields: [
        {
          id: "depthMin",
          label: "Depth Min",
          isNumber: true,
          nonNegative: true,
          maxDecimals: 1,
          lessThanOrEqIfSet: "depthMax",
        },
        {
          id: "depthMax",
          label: "Depth Max",
          isNumber: true,
          nonNegative: true,
          maxDecimals: 1,
          greaterThanOrEqIfSet: "depthMax",
        },
      ],
    },
    {
      id: "location", // This is the property on a hazard-assessment object in Redux state that stores asp/elev data.
      label: "Aspect/Elevation",
    },
    {
      id: "comment",
      label: "Comment",
    },
  ],
};
