/**
 * This structure of fields as objects with a set of properties is supposed to model the
 * ones used in our Observation package - if this works OK for validating avalanche problems
 * with a custom hook, then maybe we can extend that design pattern to the Observation
 * package also :)
 */

export const pwlAssessmentRules = {
  fields: [
    {
      id: "name",
      label: "Name",
      required: true,
    },
    {
      id: "status",
      label: "Status",
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
      id: "aspectElevation",
      label: "Aspect/Elevation",
    },
    {
      id: "comment",
      label: "Comment",
    },
  ],
};
