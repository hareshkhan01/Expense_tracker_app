import { config } from '../config/config'
import { GoogleGenerativeAI } from '@google/generative-ai'

const genAi = new GoogleGenerativeAI(config.apiKey as string)
const model = genAi.getGenerativeModel({ model: 'gemini-1.5-flash' })

const description = `i bought a 200 rupee pizza`

const getExpenseDetails = async (description: string) => {
  const prompt = `
    Extract the amount and category from the following expense description: 
    "${description}"

    - Amount should be extracted as a number.
    - Category should be one of: "Entertainment", "Food", "Travel", "Utilities", "Shopping", "Other".
    
    Respond only with a valid JSON object, without any extra text or formatting:
    {
      "amount": 100,
      "category": "Entertainment"
    }
  `

  try {
    const result = await model.generateContent(prompt)
    const textResponse = await result.response.text()

    // Clean up response if necessary
    const jsonMatch = textResponse.match(/\{[\s\S]*\}/) // Extract JSON only
    if (!jsonMatch) throw new Error('Invalid JSON response')

    const extractedData = JSON.parse(jsonMatch[0]) // Parse JSON safely
    return extractedData
  } catch (error) {
    console.error('Error:', (error as Error).message)
    throw error
  }
}

const run = async () => {
  try {
    const expenseDetails = await getExpenseDetails(description)
    console.log('Extracted Expense Details:', expenseDetails)
  } catch (error) {
    console.error('Error:', error)
  }
}

run()
