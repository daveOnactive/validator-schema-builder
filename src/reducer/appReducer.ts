import { AppState } from '../interfaces';
import { Reducer, Action } from '../types';
import { OPEN_DIALOG, CLOSE_DIALOG } from '../actions';

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
    default:
      return state
  }
};

export default appReducer;