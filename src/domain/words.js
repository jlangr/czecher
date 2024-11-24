import { retrieveAdjectives, retrieveNouns } from '../prompts/languageClient.js'
import * as Data from '../persistence/database.js'
import { adjectiveTable, nounTable } from '../persistence/database.js'

export const truncateNouns = () =>
  Data.truncate(nounTable)

export const persist = (table, word, definition) => Data.add(table, word, definition)

function wordsToAdd(words, table) {
  const wordList = words
    .split(',')
    .map(word => word.trim())
    .filter(word => !Data.containsKey(table, word))
  return wordList
}

function persistAll(definitions, table) {
  definitions.forEach(definition => persist(table, definition.word, definition))
}

export const addNouns = async words => {
  const definitions = await retrieveNouns(wordsToAdd(words, nounTable))
  persistAll(definitions, nounTable)
}

export const addAdjectives = async words => {
  const definitions = await retrieveAdjectives(wordsToAdd(words, adjectiveTable))
  persistAll(definitions, adjectiveTable)
}

export const definition = word => Data.get(nounTable, word)

export const allNouns = () => Data.all(nounTable)

export const allAdjectives = () => Data.all(adjectiveTable)

