import { when } from 'jest-when'
import { addNouns, definition, allNouns, persist, truncateNouns, addAdjectives, allAdjectives } from './words'
import { retrieveAdjectives, retrieveNouns } from '../prompts/languageClient'
import * as TestWord from './testWords'
import { nounTable } from '../persistence/database.js'

jest.mock('../prompts/languageClient')

describe('addWords', ()  => {
  beforeEach(() => {
    truncateNouns()
    jest.resetAllMocks()
  })

  it('retrieves and saves definition on add', async () => {
    when(retrieveNouns).calledWith(['orange'])
      .mockResolvedValueOnce([TestWord.orangeDefinition])

    await addNouns('orange')

    expect(definition('orange')).toEqual(TestWord.orangeDefinition)
  })

  it('only calls retrieveWords with new words', async () => {
    persist(nounTable, 'cow', TestWord.cowDefinition)
    when(retrieveNouns).calledWith(['orange', 'dog'])
      .mockResolvedValueOnce([TestWord.orangeDefinition, TestWord.dogDefinition])

    await addNouns('orange, dog, cow')

    expect(retrieveNouns).toHaveBeenCalledWith(['orange', 'dog'])
  })

  it('retrieves and saves definitions for multiple words', async () => {
    when(retrieveNouns).calledWith(['orange', 'dog'])
      .mockResolvedValueOnce([TestWord.orangeDefinition, TestWord.dogDefinition])

    await addNouns('orange, dog')

    expect(definition('orange')).toEqual(TestWord.orangeDefinition)
    expect(definition('dog')).toEqual(TestWord.dogDefinition)
  })

  it('returns all definitions', async () => {
    when(retrieveNouns).calledWith(['orange', 'dog'])
      .mockResolvedValueOnce([TestWord.orangeDefinition, TestWord.dogDefinition])
    await addNouns('orange, dog')

    const definitions = allNouns()

    expect(definitions).toEqual([TestWord.orangeDefinition, TestWord.dogDefinition])
  })

  it('adds adjectives', async () => {
    when(retrieveAdjectives).calledWith(['large', 'young'])
      .mockResolvedValueOnce([TestWord.largeDefinition, TestWord.youngDefinition])
    await addAdjectives('large, young')

    const definitions = allAdjectives()

    expect(definitions).toEqual([TestWord.largeDefinition, TestWord.youngDefinition])
  })
})