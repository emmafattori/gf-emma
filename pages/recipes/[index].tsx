import { getRecipes } from "../api/getRecipes"
import { useEffect, useState } from "react"
import { Recipe } from "../api/getRecipes"
import { useRouter } from "next/router"

export const RecipeDetailsPage = () => {
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

// export async function getStaticProps() {
//   const APP_ID = "cb42b4a6"
//   const APP_KEY = "dfa5b9f944acbf6422e2d2e3c90649e2"

//   const recipes =
//     await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=''&app_id=${APP_ID}&app_key=${APP_KEY}
//   `).then((res) => res.json())
//   console.log(recipes)
//   return {
//     props: {
//       character: recipes[0]
//     }
//   }
// }
