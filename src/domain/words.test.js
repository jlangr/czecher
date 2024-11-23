import { when } from 'jest-when'
import { addWord, clearWords, definition, allDefinitions, loadDefinition } from './words'
import { retrieveWords } from '../prompts/languageClient'
import * as TestWord from './testWords'

jest.mock('../prompts/languageClient')

describe('addWord', ()  => {
  beforeEach(() => {
    clearWords()
    jest.resetAllMocks()
  })

  it('retrieves and saves definition on add', async () => {
    when(retrieveWords).calledWith('orange')
      .mockResolvedValueOnce(TestWord.orangeDefinition)

    await addWord('orange')

    expect(definition('orange')).toEqual(TestWord.orangeDefinition)
  })

  it('does nothing if already added', async () => {
    loadDefinition('orange', TestWord.orangeDefinition)

    const word = await definition('orange')

    expect(word).toEqual(orangeDefinition)
    expect(retrieveWords).not.toHaveBeenCalled()
  })

  const add = async (word, definition) => {
    when(retrieveWords).calledWith(word).mockResolvedValueOnce(definition)
    await addWord(word)
  }

  it('persists multiple words', async () => {
    await add('orange', TestWord.orangeDefinition)
    await add('dog', TestWord.dogDefinition)

    const definitions = allDefinitions()

    expect(definitions).toEqual([TestWord.orangeDefinition, TestWord.dogDefinition])
  })
})