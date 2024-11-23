import { retrieveWords } from './languageClient'
import { sendPrompt } from '../apiclient/openai'
import * as TestWord from '../domain/testWords'
jest.mock('../apiclient/openai')

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
    sendPrompt.mockResolvedValueOnce(orangeResponseText)

    const result = await retrieveWords('word')

    expect(result).toEqual(TestWord.orangeDefinition)
  })

  it('supports array of words', async () => {
    sendPrompt.mockResolvedValueOnce(JSON.stringify([TestWord.orangeDefinition, TestWord.dogDefinition]))

    const result = await retrieveWords(['orange', 'dog'])

    expect(result).toEqual([TestWord.orangeDefinition, TestWord.dogDefinition])
  })
})