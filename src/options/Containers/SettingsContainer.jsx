import { connect } from 'react-redux'
import { settingsActions } from '../state/ducks/settings'
import { Settings } from '../Components'

const mapStateToProps = (state, ownProps) => ({
  groups: Object.keys(state.syncStorage.settingGroups)
})

const mapDispatchToProps = {
  setAllSettings: settingsActions.setAll
}

export const SettingsContainer = connect(mapStateToProps, mapDispatchToProps)(Settings)
