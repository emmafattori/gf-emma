import React from "react"
import { useRouter } from "next/router"

const RecipeDetailsPage = () => {
  const router = useRouter()
  const { id } = router.query // Access the recipe ID from the URL

  // Fetch data for the specific recipe using the ID
  // You can use this ID to fetch details from your API

  return <div>Recipe Details for ID: {id}</div>
}

export default RecipeDetailsPage
