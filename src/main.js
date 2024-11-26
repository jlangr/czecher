import { addAdjectives, addNouns, allAdjectives, allNouns } from './domain/words.js'

const main = async () => {
  const argstring = process.argv.slice(2)
  const args = argstring[0].split(' ')

  if (args.length === 0) {
    console.log('usage: [N|A] word1,word2,...')
    return;
  }

  const type = args[0].toUpperCase()
  const words = args[1]
  console.log(`${type}-${words}`)
  switch (type) {
    case 'A':
      await addAdjectives(words)
      console.dir("adjectives:\n", allAdjectives(), { depth: null })
      break
    case 'N':
      await addNouns(words)
      console.dir("nouns:\n", allNouns(), { depth: null })
      break
  }
}

await main()