import { getWord } from './domain/words.js'

function main() {
  const args = process.argv.slice(2)
  if (args.length === 0) {
    console.log('provide a word as an argument')
    return;
  }

  const result = getWord(args[0])
  console.log(result)
}

main()