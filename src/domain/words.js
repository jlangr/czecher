import { retrieveWord } from '../prompts/languageClient.js'
import * as Data from '../persistence/definitionData.js'

export const clearWords = () =>
  Data.deleteAll()

export const loadDefinition = (word, definition) =>
  Data.add(word, definition)

export const addWord = async word => {
  if (Data.containsKey(word)) return

  const definition = await retrieveWord(word)
  Data.add(word, { word, ...definition})
}

export const definition = word => Data.get(word)

export const allDefinitions = () => Data.allValues()

