const APP_ID = "cb42b4a6"
const APP_KEY = "dfa5b9f944acbf6422e2d2e3c90649e2"

export const getRecipes = async (input: string) => {
  const response = await fetch(
    `https://api.edamam.com/search?q=${input}&app_id=${APP_ID}&app_key=${APP_KEY}`
  )
  if (!response.ok) {
    throw new Error("Failed to fetch")
  }
  const recipeData = await response.json()
  return recipeData
}
