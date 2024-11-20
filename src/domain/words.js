import { retrieveWord } from '../prompts/languageClient.js'

const definitions = {}

export const clearWords = () => Object.assign(definitions, undefined)

export const loadDefinition = (word, definition) =>
  definitions[word] = { ...definition, word }

export const addWord = async word => {
  if (definitions[word]) return word

  const definition = await retrieveWord(word)
  definitions[word] = { ...definition, word }
}

export const getWord = word => {
  return definitions[word]
}
