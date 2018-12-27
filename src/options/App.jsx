import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { tags } from 'exif-tags'
import { configureStore } from './state/configureStore'
import { SettingsContainer } from './Containers'

const createInitialState = () => {
  const filteredTags = Object
    .values(tags)
    .filter(({ group }) => group !== 'pointer')

  const settings = filteredTags
    .reduce((acc, { id, name }) => {
      acc[id] = { id, name, value: true }
      return acc
    }, {})
  const settingGroups = filteredTags
    .reduce((acc, { id, group }) => {
      if (!acc.hasOwnProperty(group)) acc[group] = { id: group, name: group, settings: [] }
      acc[group].settings.push(id)
      return acc
    }, {})

  return { syncStorage: { settingGroups, settings } }
}

const { persistor, store } = configureStore(createInitialState())

export class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SettingsContainer />
        </PersistGate>
      </Provider>
    )
  }
}
