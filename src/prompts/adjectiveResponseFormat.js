export const adjectiveResponseFormat = `Response must be a parseable array of JSON objects, with no additional data. Example:
 [{
    word: 'large',
    nominative: {
      singular: { ma: 'velký', mi: 'velký', f: 'velká', n: 'velké' },
      plural: { ma: 'velcí', mi: 'velké', f: 'velké', n: 'velká' }
    },
    accusative: {
      singular: { ma: 'velkého', mi: 'velký', f: 'velkou', n: 'velké' },
      plural: { ma: 'velké', mi: 'velké', f: 'velké', n: 'velká' }
    }
  },
  {
    word: 'young',
    nominative: {
      singular: { ma: '', mi: '', f: '', n: '' },
      plural: { ma: '', mi: '', f: '', n: '' }
    },
    accusative: {
      singular: { ma: '', mi: '', f: '', n: '' },
      plural: { ma: '', mi: '', f: '', n: '' }
    }
  }]
   
The "gender" key must be one of MA (masculine animate), MI (masculine inanimate), F (feminine), and N (neuter).
`