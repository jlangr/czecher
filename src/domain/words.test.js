import { when } from 'jest-when'
import { addWord, clearWords, getWord, loadDefinition } from './words'
import { retrieveWord } from '../prompts/languageClient'

jest.mock('../prompts/languageClient')

describe('addWord', ()  => {
  const orangeDefinition = {
    word: 'orange',
    gender: 'MI',
    singular: { nominative: 'pomeranč', accusative: 'pomeranč' },
    plural: { nominative: 'pomeranče', accusative: 'pomeranče' }
  }

  beforeEach(() => {
    clearWords()
    jest.resetAllMocks()
  })

  it('retrieves and saves definition on add', async () => {
    when(retrieveWord).calledWith('orange')
      .mockResolvedValueOnce(orangeDefinition)

    await addWord('orange')

    expect(getWord('orange')).toEqual(orangeDefinition)
  })

  it('returns a cached word when already added', async () => {
    loadDefinition('orange', orangeDefinition)

    const word = await getWord('orange')

    expect(word).toEqual(orangeDefinition)
    expect(retrieveWord).not.toHaveBeenCalled()
  })
})