import { initialize as initializeStorage } from './options/storage'
import { create as createSettings } from './options/settings'

const setupPage = async () => {
  await initializeStorage()
  await createSettings()
}

document.addEventListener("DOMContentLoaded", setupPage);
