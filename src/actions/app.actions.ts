import { SchemaValidators, Action } from '../types';
import React from 'react';

export const OPEN_DIALOG = '[APP] OPEN DIALOG';
export const CLOSE_DIALOG = '[APP] CLOSE DIALOG';
export const ADD_SCHEMA_VALUE = 'ADD SCHEMA VALUE';

type Dispatch = (action: Action) => null;

type ActionType<T> = (a?: T) => (dispatch: Dispatch) => unknown | void

export const handleOpenDialog: ActionType<SchemaValidators> = (method) => {
  return (dispatch) => {
    dispatch({
      type: OPEN_DIALOG,
      payload: method
    })
  }
};

export const handleCloseDialog: ActionType<any> = () => {
  return (dispatch) => {
    dispatch({
      type: CLOSE_DIALOG,
    })
  }
};

export const addSchemaValue: ActionType<string> = (value) => {
  return (dispatch) => {
    dispatch({
      type: ADD_SCHEMA_VALUE,
      payload: value
    })
  }
}

