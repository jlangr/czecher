import {retrieveWord} from "./chatgpt.js";

const words = {}

export const addWord = word =>
  words[word] = { word }

export const getWord = async word => {
  const definition = await retrieveWord(word)
  words[word] = {...definition, word}
  return words[word]
}


