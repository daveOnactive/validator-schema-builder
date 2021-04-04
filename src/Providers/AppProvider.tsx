/** @format */

import React from 'react';
import { Dispatch } from '../types';
import { AppState } from '../interfaces';
import methods from '../data/methods';
import { validator } from '../data/validator';
import appReducer from '../reducer/appReducer';

const { createContext, useReducer } = React;

type Context = {
  dispatch?: any,
  state: AppState
}

const initialState: AppState = {
  schemaValues: validator,
  schemaValue: {
    name: '',
    validator: [],
  },
  validatorMethods: methods,
  open: false,
  validatorMethod: null,
}

export const AppContext = createContext<Context>({
  state: initialState
});

interface AppProviderProps {
  children: React.ReactNode,
}

export const AppProvider = ({ children }: AppProviderProps) => {

  const [state, dispatch] = useReducer(appReducer, initialState);

  const customDispatch: Dispatch = (params) => {
    if (typeof params === 'object') {
      dispatch(params);
    }
    if (typeof params === 'function') {
      params(dispatch);
    }
  };

  return (
    <AppContext.Provider value={{
      state,
      dispatch: customDispatch,
    }}>
      { children}
    </AppContext.Provider>
  );
};

export default AppProvider;
