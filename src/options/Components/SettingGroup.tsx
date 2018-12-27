import React, { Component } from 'react'
import { SettingContainer } from '../Containers/index'

export interface SettingGroupProps {
  id: string
  settingGroup: Store.SettingGroup
  selectAll: (id: string) => void
  SettingComponent?: typeof Component
}

export class SettingGroup extends Component<SettingGroupProps> {
  render () {
    const {
      settingGroup,
      selectAll,
      SettingComponent = SettingContainer
    } = this.props
    const { id, name, settings } = settingGroup
    return (
      <div>
        <h3>
          {name} <button onClick={() => selectAll(id)}>{browser.i18n.getMessage('selectAll')}</button>
        </h3>
        {settings.map(id => (
          <SettingComponent
            key={id}
            id={id}
          />
        ))}
      </div>
    )
  }
}
