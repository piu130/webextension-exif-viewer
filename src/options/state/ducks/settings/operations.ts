import * as actions from './actions'
import { Dispatch } from 'react'

export const selectAll = (settingIds: number[]) => (dispatch: Dispatch<Action>, getState: () => Store.All) => dispatch(
  setAll(settingIds.map(id => ({ id, value: true })))
)

export const setAll = actions.setAll

export const set = actions.set

export const toggle = (id: number) => (dispatch: Dispatch<Action>, getState: () => Store.All) => dispatch(
  actions.set({ id, value: !getState().syncStorage.settings[id].value })
)
