import { AppState } from "../interfaces";
import { Reducer, Action } from "../types";
import {
  OPEN_DIALOG,
  CLOSE_DIALOG,
  ADD_SCHEMA_VALUE,
  SAVE_VALIDATION,
} from "../actions";

const appReducer: Reducer<AppState, Action> = (state, actions) => {
  switch (actions.type) {
    case OPEN_DIALOG:
      return {
        ...state,
        open: true,
        validatorMethod: actions.payload,
      };
    case CLOSE_DIALOG:
      return {
        ...state,
        open: false,
        validatorMethod: null,
      };
    case ADD_SCHEMA_VALUE:
      return {
        ...state,
        schemaValue: {
          validator: state?.schemaValue?.validator,
          name: actions.payload,
        },
      };
    case SAVE_VALIDATION:
      return {
        ...state,
        open: false,
        validatorMethods: state.validatorMethods.filter(
          (method) => method !== actions.payload?.method
        ),
        validatorMethod: null,
        schemaValue: {
          ...state?.schemaValue,
          validator: [
            ...state.schemaValue.validator,
            {
              type: actions.payload?.method,
              message: actions.payload?.message,
              value: actions.payload?.value,
            },
          ],
        },
      };
    default:
      return state;
  }
};

export default appReducer;
