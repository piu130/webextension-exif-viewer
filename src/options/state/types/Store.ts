namespace Store {
  export type Setting = {
    id: number
    name: string,
    value: boolean
  }

  export type Settings = {
    [id: number]: Setting
  }

  export type SettingGroup = {
    id: string
    name: string
    settings: number[]
  }

  export type SettingGroups = {
    [id: string]: SettingGroup
  }

  export type All = {
    settings: Settings
    settingGroups: SettingGroups
  }
}
