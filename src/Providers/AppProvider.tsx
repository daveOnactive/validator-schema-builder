/** @format */

import React from 'react';
import { Actions } from '../types';

const { createContext, useReducer } = React;

export const AppContext = createContext({});

interface AppProviderProps {
  children: React.ReactNode,
}

// type CustomDispatch =

export const AppProvider = ({ children }: AppProviderProps) => {

  // const [ state, dispatch ] = useReducer(() => null, {});

  // const customDispatch = (params: any) => {
  //   switch (typeof params) {
  //     case 'function':
  //       params(dispatch);
  //       break;
  //     case 'object':
  //       dispatch(params);
  //       break;
  //     default:
  //       return null;
  //   }
  // };

  return (
    <AppContext.Provider value={{
      value: 'hello world'
    }}>
      { children}
    </AppContext.Provider>
  );
};

export default AppProvider;
