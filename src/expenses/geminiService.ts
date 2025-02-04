import axios from 'axios'
import { config } from '../config/config'
import { HttpError } from 'http-errors'
if (!config.apiKey) {
  throw new Error('GEMINI_API_KEY is not set in the environment variables.')
}

const classifyExpense = async (expenseDescription: string): Promise<string> => {
  const prompt = `Categorize the following expense: "${expenseDescription}" into one category such as "Food", "Travel", or "Utilities".`

  try {
    const response = await axios.post(
      'https://generativelanguage.googleapis.com/v1beta2/models/gemini-1.5:generateText',
      {
        prompt: { text: prompt },
      },
      {
        headers: {
          Authorization: `Bearer ${config.apiKey}`,
          'Content-Type': 'application/json',
        },
      },
    )

    // Extract the generated text from the response
    const generatedText =
      response.data?.candidates?.[0]?.output || 'Uncategorized'
    return generatedText.trim()
  } catch (error: Error) {
    console.error('Error classifying expense:', error)
    throw new Error('Failed to classify the expense.')
  }
}

export { classifyExpense }
