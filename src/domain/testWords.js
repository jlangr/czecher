export let largeDefinition = {
  word: 'large',
  nominative: {
    singular: { ma: 'velký', mi: 'velký', f: 'velká', n: 'velké' },
    plural: { ma: 'velcí', mi: 'velké', f: 'velké', n: 'velká' }
  },
  accusative: {
    singular: { ma: 'velkého', mi: 'velký', f: 'velkou', n: 'velké' },
    plural: { ma: 'velké', mi: 'velké', f: 'velké', n: 'velká' }
  }
}

export let youngDefinition = {
  word: 'young',
  nominative: {
    singular: { ma: '', mi: '', f: '', n: '' },
    plural: { ma: '', mi: '', f: '', n: '' }
  },
  accusative: {
    singular: { ma: '', mi: '', f: '', n: '' },
    plural: { ma: '', mi: '', f: '', n: '' }
  }
}

export const orangeDefinition = {
  word: 'orange',
  gender: 'MI',
  singular: { nominative: 'pomeranč', accusative: 'pomeranč' },
  plural: { nominative: 'pomeranče', accusative: 'pomeranče' }
}

export const dogDefinition = {
  word: 'dog',
  gender: 'MA',
  singular: { nominative: 'pes', accusative: 'psa' },
  plural: { nominative: 'psi', accusative: 'psy' }
}

export const cowDefinition = {
  word: 'cow',
  gender: 'F',
  singular: { nominative: 'kráva', accusative: 'krávu' },
  plural: { nominative: 'krávy', accusative: 'krávy' }
}
