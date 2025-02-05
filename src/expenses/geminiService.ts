// geminiService.ts

import { config } from '../config/config'
import { GoogleGenerativeAI } from '@google/generative-ai'

const genAi = new GoogleGenerativeAI(config.apiKey as string)
const model = genAi.getGenerativeModel({ model: 'gemini-1.5-flash' })
const prompt = ``

const getCategory = async (prompt: string) => {
  try {
    const result = await model.generateContent(prompt)
    return result.response.text()
  } catch (error) {
    const err = error as Error
    console.error(err.message)
    throw err
  }
}

const run = async () => {
  try {
    const response = await getCategory(prompt)
    console.log('Response:', response)
  } catch (error) {
    console.error('Error:', error)
  }
}

run()
