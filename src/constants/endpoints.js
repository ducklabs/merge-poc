export const endpoints = Object.freeze({
  LOGIN: "/admin/login",
  APP_CONFIGURATIONS: "/admin/configurations",

  ATTACHMENT: "/attachment/",

  OBSERVATION: "/observation",
  CONSTANTS: "/observation/constants/", //NOTE: The trailing forward slash is intentional DO NOT TAKE OUT.
  SNOWPACK_ASSESSMENT: {
    workFlowSummaries: uuid => `/observation/snowpackAssessment/workflow?operationUUID=${uuid}`,
    summaries: uuid => `/observation/snowpackAssessment/summaries?operationUUID=${uuid}`,
  },

  FREEFORM: {
    LAST_SUBMITTED: "/observation/freeform/",
  },

  HAZARD_ASSESSMENT: {
    LATEST: "/hazardAssessment/latest",
  },
  LOCATIONS: "/location/catalog",
  LOCATION_IMAGES: uuid => `/location/photo/${uuid}`,
  OPERATION_ADMIN: "/operation/",
  OPERATION: {
    ULTRALIGHT_USERS: uuid => `/operation/${uuid}/ultralightUsers`,
  },

  PWLS: "/pwl/operation?operationUUID=",
  PWL: {
    BASE: "/pwl",
    OPERATION: "/pwl/operation?operationUUID=",
    WORKFLOW: "/pwl/workflow?operationUUID=",
  },
  // TODO: move to to attachments!
  UPLOAD: "/attachment/upload",
  WORKFLOW: "/workflow",
  REPORT: {
    TEMPLATE: uuid => `/report/template?operationUUID=${uuid}`,
    TABULAR: "/report/tabular",
    META: "/report/meta",
  },
  IMAGE: {
    ELEVATION_ROSE: aspect => `/image/elevationRose/${aspect}`,
  },
});
