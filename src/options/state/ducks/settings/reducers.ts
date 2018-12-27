
import { createReducer } from '../../utils/createReducer'
import { SET, SET_ALL } from './types'

const setAll = (state: Store.Settings, { payload }: Action) => ({
  ...state,
  ...payload.reduce((acc: Store.Settings, {id, value}: Store.Setting) => ({ ...acc, [id]: {...state[id], value} }), {})
})

const set = (state: Store.Settings, { type, payload }: Action) => setAll(state, { type, payload: [payload] })

export const settingsReducer = createReducer({})({
  [SET]: set,
  [SET_ALL]: setAll
})
