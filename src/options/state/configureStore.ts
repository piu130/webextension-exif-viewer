import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { syncStorage } from 'redux-persist-webextension-storage'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import * as reducers  from './ducks/index'

const syncStorageConfig = {
  key: 'syncStorage',
  storage: syncStorage,
  version: 1
}

export const configureStore = (initialState: Store.All | undefined = undefined, customReducers = {}, customMiddleware = []) => {
  const rootReducer = combineReducers({ syncStorage: persistReducer(syncStorageConfig, combineReducers({ ...reducers, ...customReducers })) })

  const middleware = compose(applyMiddleware(thunk, logger, ...customMiddleware))

  const store = createStore(
    rootReducer,
    initialState,
    middleware
  )

  const persistor = persistStore(store)
  
  return { store, persistor }
}
