import { addNouns, allNouns } from './domain/words.js'

const main = async () => {
  const args = process.argv.slice(2)
  if (args.length === 0) {
    console.log('provide a comma-separated list of words as an argument')
    return;
  }

  await addNouns(args[0])

  console.log(allNouns())
}

await main()