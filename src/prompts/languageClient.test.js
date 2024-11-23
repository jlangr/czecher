import { when } from 'jest-when'
import { retrieveWord, retrieveWords } from './languageClient'
import { sendPrompt } from '../apiclient/openaiClient.js'
import * as TestWord from '../domain/testWords'
jest.mock('../apiclient/openaiClient.js')

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
    sendPrompt.mockResolvedValueOnce(JSON.stringify([TestWord.orangeDefinition]))

    const result = await retrieveWord('orange')

    expect(result).toEqual([TestWord.orangeDefinition])
    const args = sendPrompt.mock.calls[0][0]
    expect(args).toContain('word "orange"')
    console.log(args)
  })

  xit('supports array of words', async () => {
    when(sendPrompt).calledWith(['orange', 'dog'])
      .mockResolvedValueOnce(JSON.stringify([TestWord.orangeDefinition, TestWord.dogDefinition]))

    const result = await retrieveWords(['orange', 'dog'])

    expect(result).toEqual([TestWord.orangeDefinition, TestWord.dogDefinition])
  })
})