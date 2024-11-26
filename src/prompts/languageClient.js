import { sendPrompt } from '../apiclient/openaiClient'
import { nounResponseFormat } from './nounResponseFormat'
import { adjectiveResponseFormat } from './adjectiveResponseFormat'

const sliceJSONArrayFrom = str =>
  str.slice(str.indexOf('['), str.lastIndexOf(']') + 1)

const joinQuoted = words =>
  words.map(word => `"${word}"`).join(',')

const pluralizeIfMany = (word, list) =>
  list.length === 1 ? word : `${word}s`

const request = (wordPart, words) => `Given a list of English ${wordPart}, separated by commas, ` +
  `provide appropriate Czech language information for ` +
  `the ${(pluralizeIfMany('word', words))} ${(joinQuoted(words))}`

const createPromptText = (responseFormat, wordPart, words) =>
  `${responseFormat} ${request(wordPart, words)}`

export const retrieveAdjectives = async words => {
  const response = await sendPrompt(createPromptText(adjectiveResponseFormat, 'adjectives', words))
  return JSON.parse(sliceJSONArrayFrom(response))
}

export const retrieveNouns = async words => {
  const response = await sendPrompt(createPromptText(nounResponseFormat, 'nouns', words))
  return JSON.parse(sliceJSONArrayFrom(response))
}

export const retrieveWord = async word => retrieveNouns([word])

