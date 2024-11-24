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
  let wordList = "";
  for (let i = 0; i < words.length; i++) {
    const currentWord = words[i];
    const quotedWord = '"' + currentWord + '"';
    wordList += quotedWord;
    if (i !== words.length - 1) {
      wordList += ",";
    }
  }
  const finalPrompt = `Given a list of English nouns, separated by commas, ` +
    `provide appropriate Czech language information for the ${wordPrefix} ${wordList}`
  const response = await sendPrompt(`${format} ${finalPrompt}`)
  const startIndex = response.indexOf('[')
  const endIndex = response.lastIndexOf(']') + 1
  const jsonText = response.slice(startIndex, endIndex)
  return JSON.parse(jsonText)
}

export const retrieveWord = async word => retrieveWords([word])

