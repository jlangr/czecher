import OpenAI from 'openai'

const createClient = () =>
  new OpenAI({ apiKey: process.env['OPENAI_API_KEY'] })

export const sendPrompt = async promptText => {
  const response = await createClient().chat.completions.create({
    messages: [{ role: 'user', content: promptText }],
    model: 'gpt-4o'
  })

  const choices = response.choices
  return choices[0].message?.content
}