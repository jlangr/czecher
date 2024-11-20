const { addWord, getWord } from './words'

describe('addWord', ()  => {
  it('allows adding an english noun', () => {
    addWord('orange')

    const word = getWord('orange')

    expect(word).toEqual({
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
    })
  })

})