import { retrieveWords } from '../prompts/languageClient'
import * as Data from '../persistence/database'

export const clearWords = () =>
  Data.deleteAll()

export const loadDefinition = (word, definition) =>
  Data.add(word, definition)

export const addWord = async word => {
  if (Data.containsKey(word)) return

  const definition = await retrieveWords(word)
  Data.add(word, { word, ...definition})
}

export const definition = word => Data.get(word)

export const allDefinitions = () => Data.allValues()

