import { settingsOperations } from '../settings'

export const selectAll = (id) => (dispatch, getState) => dispatch(
  settingsOperations.selectAll(getState().syncStorage.settingGroups[id].settings)
)
