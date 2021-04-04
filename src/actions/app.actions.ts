import { SchemaValidators, Action } from '../types';
import React from 'react';

export const OPEN_DIALOG = '[APP] OPEN DIALOG';
export const CLOSE_DIALOG = '[APP] CLOSE DIALOG';

type Dispatch = (action: Action) => null;

export const handleOpenDialog = (method: SchemaValidators) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: OPEN_DIALOG,
      payload: method
    })
  }
};

export const handleCloseDialog = () => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: CLOSE_DIALOG,
    })
  }
}

