import { AppState } from '../interfaces';
import { Reducer, Action } from '../types';

const appReducer: Reducer<AppState, Action> = (state, actions) => {
  switch (actions.type) {
    default:
      return state
  }
};

export default appReducer;