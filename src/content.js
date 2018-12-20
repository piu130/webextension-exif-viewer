import { getAllTags } from 'exif'
import modalCss from './content/modal.css'
import modalHtml from './content/modal.html'

const fileToDataView = async (file) => new Promise((resolve, reject) => {
  const reader = new FileReader()
  reader.onload = (e) => resolve(new DataView(e.target.result))
  reader.onerror = (error) => reject(error)
  reader.readAsArrayBuffer(file)
})

const createNewOnChange = (oldOnChange) => async (e) => {
  const files = Array.from(e.srcElement.files)

  const promises = files.map(
    file => fileToDataView(file)
      .then(dataView => getAllTags(dataView))
      .then(tags => ({ file, tags }))
  )
  const settingTags = Object.keys(await browser.storage.sync.get())
  
  const analizedFiles = (await Promise.all(promises))
    // Filter files not containing any tag from settings
    .filter(({ tags }) => Object.values(tags).map(tag => tag.name).some(name => settingTags.includes(name)))

  if (analizedFiles.length > 0) {
    const page = analizedFiles.map(({file, tags}) => `
      <b>${file.name}</b>
      <p>${Object.keys(tags).reduce((acc, key) => `${acc} 
        ${tags[key].name}: ${tags[key].value}<br />`
    , '')}</p>
    `).join('<br />')

    showModal(page)
  }

  oldOnChange(e)
}

const showModal = (content) => {
  const modal = document.getElementById('webextension-exif-viewer')
  modal.innerHTML = modalHtml
  document.getElementById('fileContent').innerHTML = content
  modal.style.removeProperty('display')
}

const inputs = Array.from(document.getElementsByTagName("input"))
  .filter(input => input.type === 'file')
  .map(input => ({ tag: input, onchange: input.onchange }))

inputs.forEach(
  input => input.tag.onchange = createNewOnChange(input.tag.onchange)
)

console.log('loaded..')

const createModal = () => {
  const style = document.createElement('style')
  style.type = 'text/css'
  style.appendChild(document.createTextNode(modalCss.toString()))
  document.head.appendChild(style)

  const modal = document.createElement('div')
  modal.setAttribute('id', 'webextension-exif-viewer')
  modal.style.display = 'none'
  document.body.appendChild(modal)
}
createModal()
