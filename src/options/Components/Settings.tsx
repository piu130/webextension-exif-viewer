import React, { Component } from 'react'
import { SettingGroupContainer } from '../Containers'

export interface SettingsProps {
  groups: Store.SettingGroup[]
  SettingGroupComponent: Component
}

export class Settings extends Component<SettingsProps> {
  render () {
    const {
      groups,
      SettingGroupComponent = SettingGroupContainer
    } = this.props
    return (
      <div>
        {groups.map(id => (
          <SettingGroupComponent
            key={id}
            id={id}
          />
        ))}
      </div>
    )
  }
}
