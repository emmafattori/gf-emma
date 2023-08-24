import { useRouter } from "next/router"
import { getRecipes } from "../api/getRecipes"
import { useEffect, useState } from "react"
import { Recipe } from "../api/getRecipes"
const RecipeDetailPage = () => {
  const router = useRouter()

  const { index, searchTerm } = router.query

  const [recipe, setRecipe] = useState<Recipe | null>(null)

  useEffect(() => {
    async function getRecipe() {
      try {
        if (!searchTerm) return

        const recipesData = await getRecipes(searchTerm)
        console.log(recipesData)

        if (recipesData.length > Number(index)) {
          const selectedRecipe = recipesData[Number(index)]
          setRecipe(selectedRecipe)
        } else {
          console.log("Recipe not found for the given index.")
        }
      } catch (error) {
        // Handle error
      }
    }

    getRecipe()
  }, [index, searchTerm])

  if (!recipe) {
    return <p>Recipe not found</p>
  }

  return (
    <div>
      <h2>{recipe.recipe.label}</h2>
      {/* Display other recipe details */}
    </div>
  )
}

export default RecipeDetailPage
