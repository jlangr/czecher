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
  beforeEach(() => jest.resetAllMocks())

  it('sends appropriate text in prompt', async () => {
    // when(sendPrompt).calledWith('orange')
    sendPrompt.mockResolvedValueOnce(JSON.stringify([TestWord.orangeDefinition]))

    const result = await retrieveWords(['orange'])

    expect(result).toEqual([TestWord.orangeDefinition])
    const args = sendPrompt.mock.calls[0][0]
    expect(args).toContain('word "orange"')
  })

  it('supports array of words', async () => {
    sendPrompt.mockResolvedValueOnce(JSON.stringify([TestWord.orangeDefinition, TestWord.dogDefinition]))

    const result = await retrieveWords(['orange', 'dog'])

    expect(result).toEqual([TestWord.orangeDefinition, TestWord.dogDefinition])
    const args = sendPrompt.mock.calls[0][0]
    expect(args).toContain('words "orange","dog"')
  })

  it('can handle prefix and postfix data around JSON', async () => {
    const sillyPrefix = "```json"
    const sillyPostfix = "```"
    sendPrompt.mockResolvedValueOnce(`${sillyPrefix}
${JSON.stringify([TestWord.orangeDefinition, TestWord.dogDefinition])}
${sillyPostfix}`)

    const result = await retrieveWords(['orange', 'dog'])

    expect(result).toEqual([TestWord.orangeDefinition, TestWord.dogDefinition])
    const args = sendPrompt.mock.calls[0][0]
    expect(args).toContain('words "orange","dog"')
  })
})