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

export const retrieveWords = async words => {
  const wordPrefix = words.length === 1 ? 'word' : 'words'
  const wordList = words.map(word => `"${word}"`).join(',')

  const finalPrompt = `Given a list of English nouns, separated by commas, provide appropriate Czech language information for the ${wordPrefix} ${wordList}`

  const response = await sendPrompt(`${format} ${finalPrompt}`)

  return JSON.parse(response)
}

export const retrieveWord = async word => retrieveWords([word])

