import { useRouter } from "next/router"
import { useEffect, useState } from "react"

import { getRecipes } from "@/pages/api/getRecipes"
type Recipe = {
  label: string
}
const RecipeDetailPage = () => {
  const router = useRouter()
  const index = router.query

  const [recipes, setRecipes] = useState<Recipe[]>([])

  useEffect(() => {}, [index])

  const recipeIndex = typeof index === "string" ? parseInt(index, 10) : -1
  const recipe =
    recipeIndex >= 0 && recipeIndex < recipes.length
      ? recipes[recipeIndex]
      : null
}

export default RecipeDetailPage
