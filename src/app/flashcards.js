import { allAdjectives, allNouns, persist } from '../domain/words.js'
import {
  cowDefinition,
  dogDefinition,
  largeDefinition,
  orangeDefinition,
  prettyDefinition,
  smallDefinition,
  youngDefinition
} from '../domain/testWords.js'
import { adjectiveTable, nounTable } from '../persistence/database.js'

export const randomInt = n => Math.floor(Math.random() * n)

const pluralizeIf = (word, isPlural) => isPlural ? `${word}s` : word

const randomElement = (array) => array[randomInt(array.length)]

const generateRandom = (adjectives, nouns) => ({
  adjective: randomElement(adjectives),
  noun: randomElement(nouns),
})

const formatCard = (phrase, caseAgreement, correctAdjective, correctNoun) =>
  `${phrase.adjective.word} ${pluralizeIf(phrase.noun.word, caseAgreement.number === 'plural')}
  
  Provide the ${caseAgreement.number} ${caseAgreement.grammaticalCase} case.
  
  Correct answer: ${correctAdjective} ${correctNoun}
`

const selectNoun = (noun, caseAgreement) =>
  noun[caseAgreement.number][caseAgreement.grammaticalCase]

const selectAdjective = (adjective, gender, caseAgreement) =>
  adjective[caseAgreement.grammaticalCase][caseAgreement.number][gender.toLowerCase()]

const cases = ["nominative", "accusative"]
const numbers = ["singular", "plural"]

const generateCaseAgreementChallenge = () => ({
  grammaticalCase: randomElement(cases),
  number: randomElement(numbers)
})

const generateCard = (adjectives, nouns) => {
  const phrase = generateRandom(adjectives, nouns)
  const caseAgreement = generateCaseAgreementChallenge()

  const correctAdjective = selectAdjective(phrase.adjective, phrase.noun.gender, caseAgreement)
  const correctNoun = selectNoun(phrase.noun, caseAgreement)

  return formatCard(phrase, caseAgreement, correctAdjective, correctNoun)
}

export const run = () => {
  persist(nounTable, 'dog', dogDefinition);
  persist(nounTable, 'orange', orangeDefinition);
  persist(nounTable, 'cow', cowDefinition);
  persist(adjectiveTable, 'large', largeDefinition);
  persist(adjectiveTable, 'young', youngDefinition);
  persist(adjectiveTable, 'small', smallDefinition);
  persist(adjectiveTable, 'pretty', prettyDefinition);

  const card = generateCard(allAdjectives(), allNouns())
  console.log(card)
}