import { getRecipes } from "../api/getRecipes"
import { useEffect, useState } from "react"
import { Recipe } from "../api/getRecipes"
import { useRouter } from "next/router"

const RecipeDetailsPage = () => {
  const router = useRouter()
  const { index } = router.query
  const [recipeData, setRecipeData] = useState<Recipe | null>(null) // State to hold fetched recipe data

  useEffect(() => {
    if (typeof index === "string") {
      // Fetch recipe data based on the index
      fetchRecipeData(parseInt(index, 10)) // Fetch recipe data based on the index
    }
  }, [index])

  const fetchRecipeData = async (recipeIndex: number) => {
    try {
      const response = await fetch(`/api/recipes/${recipeIndex}`) // Adjust the API endpoint as per your project
      if (response.ok) {
        const data = await response.json()
        setRecipeData(data)
      } else {
        console.error("Error fetching recipe:", response.status)
      }
    } catch (error) {
      console.error("Error fetching recipe:", error)
    }
  }

  if (!recipeData) {
    return <div>No recipe found</div>
  }
  return (
    <div>
      <h2>Recipe Details</h2>
      <h3>{recipeData.recipe.label}</h3>

      {/* Display other recipe details */}
    </div>
  )
}

export default RecipeDetailsPage
