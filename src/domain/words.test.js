import { when } from 'jest-when'
import { addWords, clearWords, definition, allDefinitions, persist } from './words'
import { retrieveWords } from '../prompts/languageClient'
import * as TestWord from './testWords'
import { containsKey } from '../persistence/database.js'

jest.mock('../prompts/languageClient')

describe('addWords', ()  => {
  beforeEach(() => {
    clearWords()
    jest.resetAllMocks()
  })

  it('retrieves and saves definition on add', async () => {
    when(retrieveWords).calledWith(['orange'])
      .mockResolvedValueOnce([TestWord.orangeDefinition])

    await addWords('orange')

    expect(definition('orange')).toEqual(TestWord.orangeDefinition)
  })

  it('only calls retrieveWords with new words', async () => {
    persist('cow', TestWord.cowDefinition)
    when(retrieveWords).calledWith(['orange', 'dog'])
      .mockResolvedValueOnce([TestWord.orangeDefinition, TestWord.dogDefinition])

    await addWords('orange, dog, cow')

    expect(retrieveWords).toHaveBeenCalledWith(['orange', 'dog'])
  })

  it('retrieves and saves definitions for multiple words', async () => {
    when(retrieveWords).calledWith(['orange', 'dog'])
      .mockResolvedValueOnce([TestWord.orangeDefinition, TestWord.dogDefinition])

    await addWords('orange, dog')

    expect(definition('orange')).toEqual(TestWord.orangeDefinition)
    expect(definition('dog')).toEqual(TestWord.dogDefinition)
  })

  it('returns all definitions', async () => {
    when(retrieveWords).calledWith(['orange', 'dog'])
      .mockResolvedValueOnce([TestWord.orangeDefinition, TestWord.dogDefinition])
    await addWords('orange, dog')

    const definitions = allDefinitions()

    expect(definitions).toEqual([TestWord.orangeDefinition, TestWord.dogDefinition])
  })
})