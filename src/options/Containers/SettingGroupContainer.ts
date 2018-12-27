import { connect } from 'react-redux'
import { settingGroupsOperations } from '../state/ducks/settingGroups/index'
import { SettingGroup, SettingGroupProps } from '../Components/SettingGroup'

const mapStateToProps = (state: Store.All, ownProps: SettingGroupProps) => ({
  settingGroup: state.syncStorage.settingGroups[ownProps.id]
})

const mapDispatchToProps = {
  selectAll: settingGroupsOperations.selectAll
}

export const SettingGroupContainer = connect(mapStateToProps, mapDispatchToProps)(SettingGroup)
