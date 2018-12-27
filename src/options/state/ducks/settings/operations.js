import * as actions from './actions'

export const selectAll = (settingIds) => (dispatch, getState) => dispatch(
  setAll(settingIds.map(id => ({ id, value: true })))
)

export const setAll = actions.setAll

export const set = actions.set

export const toggle = (id) => (dispatch, getState) => dispatch(
  actions.set({ id, value: !getState().syncStorage.settings[id].value })
)
