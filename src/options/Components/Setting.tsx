import React, { Component } from 'react'

export interface SettingProps {
  setting: Store.Setting
  onChange: () => void
}

export class Setting extends Component<SettingProps> {
  render () {
    const { setting, onChange } = this.props
    const { id, name, value } = setting
    
    return (
      <div>
        <input type="checkbox" id={id.toString()} name={name} onChange={onChange} checked={value} />
        <label htmlFor={id.toString()}>{name}</label>
      </div>
    )
  }
}
