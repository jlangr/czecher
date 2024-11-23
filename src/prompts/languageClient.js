import { sendPrompt } from '../apiclient/openai'

export const retrieveWords = async word => {
  const format = `Response must be a parseable JSON object, with no additional data. Example of the required format:
   {
     word: 'orange',
     gender: 'MI',
     singular: {
       nominative: 'pomeranč',
       accusative: 'pomeranč'
     },
     plural: {
       nominative: 'pomeranče',
       accusative: 'pomeranče'
     }
   }
   
   The "gender" key must be one of MA (masculine animate), MI (masculine inanimate), F (feminine), and N (neuter).
  `
  const finalPrompt = `Given an English noun, provide appropriate Czech language information for the word ${word}`
  const response = await sendPrompt(`${format} ${finalPrompt}`)
  return JSON.parse(response)
}