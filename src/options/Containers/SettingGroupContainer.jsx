import { connect } from 'react-redux'
import { settingGroupsOperations } from '../state/ducks/settingGroups'
import { SettingGroup } from '../Components'

const mapStateToProps = (state, ownProps) => ({
  settingGroup: state.syncStorage.settingGroups[ownProps.id]
})

const mapDispatchToProps = {
  selectAll: settingGroupsOperations.selectAll
}

export const SettingGroupContainer = connect(mapStateToProps, mapDispatchToProps)(SettingGroup)
