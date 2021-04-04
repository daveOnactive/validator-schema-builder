import { AppState } from '../interfaces';
import { Reducer, Action } from '../types';
import { OPEN_DIALOG, CLOSE_DIALOG, ADD_SCHEMA_VALUE } from '../actions';

const appReducer: Reducer<AppState, Action> = (state, actions) => {
  switch (actions.type) {
    case OPEN_DIALOG:
      return {
        ...state,
        open: true,
        validatorMethod: actions.payload
      }
    case CLOSE_DIALOG:
      return {
        ...state,
        open: false,
        validatorMethod: null
      }
    case ADD_SCHEMA_VALUE:
      return {
        ...state,
        schemaValue: {
          validator: state.schemaValue.validator,
          name: actions.payload,
        }
      }
    default:
      return state
  }
};

export default appReducer;