export const nounTable = 'nouns'
export const adjectiveTable = 'adjectives'

const data = {
  [nounTable]: {},
  [adjectiveTable]: {}
}

export const containsKey = (table, key) => !!data[table][key]

export const truncate = (table) =>
  Object.keys(data[table]).forEach(key => delete data[table][key])

export const add = (table, key, value) => data[table][key] = value

export const get = (table, word) => data[table][word]

export const all = (table) => Object.values(data[table])
