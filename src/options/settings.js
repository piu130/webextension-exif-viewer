import { allTagNames } from './tags'
import { setAllTags, setInitialValues, setOption, getOption } from './storage'

const restoreOptions = async () => allTagNames.forEach(async (tagId) => {
  const option = await getOption(tagId)
  document.getElementById(tagId).checked = option[tagId]
})

const syncSettings = () => browser.storage.onChanged.addListener(changes => {
  for (let property in changes) {
    if (allTagNames.includes(property)) document.getElementById(property).checked = changes[property].newValue
  }
})

export const create = async () => {
  document.getElementById('form').innerHTML += '<br />' + allTagNames
    .map(tag => `
      <input type="checkbox" id="${tag}" name="${tag}" />
      <label for="${tag}">${tag}</label>
    `)
    .join('<br />')
  
  allTagNames.forEach(tagName => document.getElementById(tagName).addEventListener('change', event => setOption(tagName, event.target.checked)))

  document.getElementById('select_all').onclick = () => setAllTags(true)
  document.getElementById('restore_default').onclick = () => setInitialValues()

  await restoreOptions()
  syncSettings()
}
