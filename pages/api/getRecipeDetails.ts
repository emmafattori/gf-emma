const APP_ID = "cb42b4a6"
const APP_KEY = "dfa5b9f944acbf6422e2d2e3c90649e2"

export interface Recipe {
  recipe: {
    label: string
    mealType: string[]
    calories: number
    ingredients: []
  }
}

interface ApiResponse {
  hits: Recipe[]
}

export const getRecipes = async (id: string): Promise<ApiResponse> => {
  const response = await fetch(
    `${id}type=public&app_id=${APP_KEY}&app_key=${APP_ID}`
  )
  if (!response.ok) {
    throw new Error("Failed to fetch")
  }
  const recipeData = await response.json()
  console.log(recipeData)
  return recipeData
}
