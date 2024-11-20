import { when } from 'jest-when'
import { addWord, getWord } from './words'
import { retrieveWord } from './chatgpt'
jest.mock('./chatgpt')

describe('addWord', ()  => {
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

  it('allows adding an english noun', async () => {
    when(retrieveWord).calledWith('orange')
      .mockResolvedValueOnce(orangeDefinition)
    addWord('orange')

    const word = await getWord('orange')

    expect(word).toEqual({
      word: 'orange',
      ...orangeDefinition
    })
  })
})