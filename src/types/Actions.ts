type ActionObject<T> = {
  type?: string,
  payload?: T
}

type ActionAsync = (dispatch: any) => null;

export type Actions<T> = ActionObject<T> | ActionAsync;