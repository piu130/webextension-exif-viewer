import { SET, SET_ALL } from './types'

export const set = (setting: BrowserStoreSetting): Action => ({
  type: SET,
  payload: setting
})

export const setAll = (settings: BrowserStoreSetting[]): Action => ({
  type: SET_ALL,
  payload: settings
})
