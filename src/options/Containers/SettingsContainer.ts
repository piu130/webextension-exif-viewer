import { connect } from 'react-redux'
import { settingsActions } from '../state/ducks/settings/index'
import { Settings, SettingsProps } from '../Components/Settings'

const mapStateToProps = (state: Store.All, ownProps: SettingsProps) => ({
  groups: Object.keys(state.syncStorage.settingGroups)
})

const mapDispatchToProps = {
  setAllSettings: settingsActions.setAll
}

export const SettingsContainer = connect(mapStateToProps, mapDispatchToProps)(Settings)
