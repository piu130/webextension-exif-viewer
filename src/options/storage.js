import { allTagNames } from './tags'

export const setOptions = async (options) => browser.storage.sync.set(options)
export const setOption = async (tagId, value) => browser.storage.sync.set({ [tagId]: value })

export const getOption = async (tagId) => browser.storage.sync.get(tagId)

export const setAllTags = async (to = true) => {
  const initialValues = allTagNames.reduce((accumulator, tagName) => ({
    ...accumulator,
    [tagName]: to
  }), {})

  return await browser.storage.sync.set(initialValues)
}

export const setInitialValues = async () => setAllTags(true)

export const initialize = async () => {
  const storage = await browser.storage.sync.get()
  if (Object.keys(storage).length === 0) setInitialValues()
}
