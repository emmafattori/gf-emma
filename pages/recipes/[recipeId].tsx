// pages/[recipeId].tsx
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { getRecipeDetails } from "../api/getRecipeDetails"
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
      <div>The details page</div>
      <h2>{recipe.label}</h2>
    </>
    // <div>
    //   {recipeDetails ? (
    //     <div>
    //       <h1>{recipeDetails.name}</h1>
    //       <p>{recipeDetails.description}</p>
    //       {/* Render other recipe details */}
    //     </div>
    //   ) : (
    //     <p>Loading...</p>
    //   )}
    // </div>
  )
}

export default RecipeDetailsPage
