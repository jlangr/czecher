import { retrieveWords } from '../prompts/languageClient.js'
import * as Data from '../persistence/database.js'

export const clearWords = () =>
  Data.deleteAll()

export const persist = (word, definition) => Data.add(word, definition)

export const addWords = async words => {
  const wordList = words
    .split(',')
    .map(word => word.trim())
    .filter(word => !Data.containsKey(word))

  const definitions = await retrieveWords(wordList)
  definitions.forEach(definition => {
    if (!Data.containsKey(definition.word))
      persist(definition.word, definition)
  })
}

export const definition = word => Data.get(word)

export const allDefinitions = () => Data.allValues()

