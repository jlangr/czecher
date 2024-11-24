import { addWords, allDefinitions } from './domain/words.js'

const main = async () => {
  const args = process.argv.slice(2)
  if (args.length === 0) {
    console.log('provide a comma-separated list of words as an argument')
    return;
  }

  await addWords(args[0])

  console.log(allDefinitions())
}

await main()