import { Reducer } from "react";

type ReducerMap = {
  [actionType: string]: Reducer<any, any>
}

export const createReducer = (initialState: object) => (reducerMap: ReducerMap) => (state = initialState, action: Action) => {
  const reducer = reducerMap[action.type]
  return reducer ? reducer(state, action) : state
}
