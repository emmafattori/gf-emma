const APP_ID = "cb42b4a6"
const APP_KEY = "dfa5b9f944acbf6422e2d2e3c90649e2"

interface ApiResponse {
  recipeId: string
}

export const getRecipeDetails = async (id: string): Promise<ApiResponse> => {
  const response = await fetch(id)
  if (!response.ok) {
    throw new Error("Failed to fetch")
  }
  const recipeData = await response.json()
  console.log(recipeData)
  return recipeData
}
