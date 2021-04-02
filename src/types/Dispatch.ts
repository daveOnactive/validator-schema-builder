import { Action } from '.';

type AsyncAction = (dispatch: any) => unknown;

export type Dispatch = (params: Action | AsyncAction) => void;