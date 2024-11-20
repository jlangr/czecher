import { retrieveWord } from './languageClient';
import { prompt } from '../clients/openai'
jest.mock('../clients/openai.js')

const orangeDefinition = {
  word: 'orange',
  gender: 'MI',
  singular: {
    nominative: 'pomeranč',
    accusative: 'pomeranč'
  },
  plural: {
    nominative: 'pomeranče',
    accusative: 'pomeranče'
  }
}

const orangeResponseText = `
{
  "word": "orange",
  "gender": "MI",
  "singular": {
    "nominative": "pomeranč",
    "accusative": "pomeranč"
  },
  "plural": {
    "nominative": "pomeranče",
    "accusative": "pomeranče"
  }
}`

describe('LanguageClient', () => {
  it('sends appropriate text in prompt', async () => {
    prompt.mockResolvedValueOnce(orangeResponseText)

    const result = await retrieveWord('word')

    expect(result).toEqual(orangeDefinition)
  })
})