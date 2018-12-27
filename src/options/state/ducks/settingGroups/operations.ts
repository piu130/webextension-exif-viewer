import { settingsOperations } from '../settings/index'
import { Dispatch } from 'react';

export const selectAll = (id: string) => (dispatch: Dispatch<Action>, getState: () => Store.All) => dispatch(
  settingsOperations.selectAll(getState().syncStorage.settingGroups[id].settings)
)
