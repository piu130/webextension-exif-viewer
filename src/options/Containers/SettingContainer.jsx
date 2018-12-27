import { connect } from 'react-redux'
import { settingsOperations } from '../state/ducks/settings'
import { Setting } from '../Components'

const mapStateToProps = (state, ownProps) => ({
  setting: state.syncStorage.settings[ownProps.id]
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: () => dispatch(settingsOperations.toggle(ownProps.id))
})

export const SettingContainer = connect(mapStateToProps, mapDispatchToProps)(Setting)
