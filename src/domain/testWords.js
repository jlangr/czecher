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
    singular: { ma: 'mladý', mi: 'mladý', f: 'mladá', n: 'mladé' },
    plural: { ma: 'mladí', mi: 'mladé', f: 'mladé', n: 'mladá' }
  },
  accusative: {
    singular: { ma: 'mladého', mi: 'mladý', f: 'mladou', n: 'mladé' },
    plural: { ma: 'mladé', mi: 'mladé', f: 'mladé', n: 'mladá' }
  }
}

export const smallDefinition = {
  word: 'small',
  nominative: {
    singular: { ma: 'malý', mi: 'malý', f: 'malá', n: 'malé' },
    plural: { ma: 'malí', mi: 'malé', f: 'malé', n: 'malá' }
  },
  accusative: {
    singular: { ma: 'malého', mi: 'malý', f: 'malou', n: 'malé' },
    plural: { ma: 'malé', mi: 'malé', f: 'malé', n: 'malá' }
  }
}

export const prettyDefinition =  {
  word: 'pretty',
  nominative: {
    singular: { ma: 'hezký', mi: 'hezký', f: 'hezká', n: 'hezké' },
    plural: { ma: 'hezci', mi: 'hezké', f: 'hezké', n: 'hezká' }
  },
  accusative: {
    singular: { ma: 'hezkého', mi: 'hezký', f: 'hezkou', n: 'hezké' },
    plural: { ma: 'hezké', mi: 'hezké', f: 'hezké', n: 'hezká' }
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
