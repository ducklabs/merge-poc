import {action} from "@storybook/addon-actions";

export default {
  getState: () => {
    return {
      accountReducer: {},
      appConfigurationsReducer: {},
      attachmentReducer: {},
      hazardAssessmentsReducer: {},
      modalReducer: {},
      operationReducer: {},
      observationReducer: {},
      pwlReducer: {},
      workflowReducer: {},
      versionReducer: {},
      snowpackReducer: {},
      reportReducer: {},
    };
  },
  subscribe: () => 0,
  dispatch: action("dispatch"),
};
