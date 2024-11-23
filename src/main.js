import { retrieveWords } from './prompts/languageClient.js'

const main = async () => {
  const args = process.argv.slice(2)
  if (args.length === 0) {
    console.log('provide a word as an argument')
    return;
  }

  const result = await retrieveWords(args[0])
  console.log(result)
}

main()