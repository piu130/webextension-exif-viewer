import { SET_ALL } from './types'

export const setAll = (settingGroups: Store.SettingGroup[]): Action => ({
  type: SET_ALL,
  payload: settingGroups
})
