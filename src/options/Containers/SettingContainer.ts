import { connect } from 'react-redux'
import { settingsOperations } from '../state/ducks/settings/index'
import { Setting, SettingProps } from '../Components/Setting'
import { Dispatch } from 'react'

const mapStateToProps = (state: Store.All, ownProps: SettingProps) => ({
  setting: state.syncStorage.settings[ownProps.id]
})

const mapDispatchToProps = (dispatch: Dispatch<Action>, ownProps: SettingProps) => ({
  onChange: () => dispatch(settingsOperations.toggle(ownProps.id))
})

export const SettingContainer = connect(mapStateToProps, mapDispatchToProps)(Setting)
