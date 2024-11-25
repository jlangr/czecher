import { sendPrompt } from '../apiclient/openaiClient.js'

const format = `Response must be a parseable array of JSON objects, with no additional data. Example of the required format:
   [{
      word: 'orange',
      gender: 'MI',
      singular: { nominative: 'pomeranč', accusative: 'pomeranč' },
      plural: { nominative: 'pomeranče', accusative: 'pomeranče' }
    },
    {
      word: 'dog',
      gender: 'MA',
      singular: { nominative: 'pes', accusative: 'psa' },
      plural: { nominative: 'psy', accusative: 'psi' }
    }]
   
   The "gender" key must be one of MA (masculine animate), MI (masculine inanimate), F (feminine), and N (neuter).
  `

const sliceJSONArrayFrom = response => {
  const startIndex = response.indexOf('[')
  const endIndex = response.lastIndexOf(']') + 1
  return response.slice(startIndex, endIndex)
}

const joinQuoted = words =>
  words.map(word => `"${word}"`).join(',')

const pluralizeIfMany = (word, list) =>
  list.length === 1 ? word : `${word}s`

const request = (wordPart, words) => `Given a list of English ${wordPart}, separated by commas, ` +
  `provide appropriate Czech language information for ` +
  `the ${(pluralizeIfMany('word', words))} ${(joinQuoted(words))}`

export const retrieveAdjectives = async words => {
  const response = await sendPrompt(`${format} ${request('adjectives', words)}`)
  return JSON.parse(sliceJSONArrayFrom(response))
}

export const retrieveNouns = async words => {
  const response = await sendPrompt(`${format} ${request('nouns', words)}`)
  return JSON.parse(sliceJSONArrayFrom(response))
}

export const retrieveWord = async word => retrieveNouns([word])

