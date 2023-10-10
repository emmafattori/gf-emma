// pages/[recipeId].tsx
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { getRecipeDetails } from "../api/getRecipeDetails"
import "../../src/globals.css"
import { Header } from "../../src/components/header/header"

const RecipeDetailsPage = () => {
  const router = useRouter()
  const { query } = router

  const [recipeDetails, setRecipeDetails] = useState<any>(null)

  // useEffect(() => {
  //   if (recipe === "string") {
  //     const data = getRecipeDetails(recipe)

  //     setRecipeDetails(data)
  //   }
  //   // Update the 'recipeDetails' state with the fetched data
  // }, [recipe])
  console.log(query)

  const recipe = query

  return (
    <>
      <div className="h-screen w-4/5 m-auto my-4">
        <header className="text-center">
          <h1 className="text-4xl">Recipe Details Page</h1>
        </header>
        <div className="details-container">
          <div>
            {recipe ? (
              <div>
                <h2>{recipe.label}</h2>
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default RecipeDetailsPage
