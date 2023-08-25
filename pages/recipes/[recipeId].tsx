// pages/[recipeId].tsx
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { getRecipeDetails } from "../api/getRecipeDetails"
const RecipeDetailsPage = () => {
  const router = useRouter()
  const { recipeId } = router.query

  const [recipeDetails, setRecipeDetails] = useState<any>(null)

  useEffect(() => {
    if (recipeId === "string") {
      const data = getRecipeDetails(recipeId)

      setRecipeDetails(data)
    }
    // Update the 'recipeDetails' state with the fetched data
  }, [recipeId])
  console.log(recipeDetails)

  return (
    <div>The details page</div>
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
