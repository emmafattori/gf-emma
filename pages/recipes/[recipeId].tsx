// pages/[recipeId].tsx
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { getRecipeDetails } from "../api/getRecipeDetails"
import Image from "next/image"

const RecipeDetailsPage = () => {
  const router = useRouter()
  const { query } = router

  const recipe = query
  console.log(recipe)
  return (
    <>
      <div className="h-screen w-4/5 m-auto my-4">
        <header className="text-center">
          <h1 className="text-4xl">Recipe Details Page</h1>
        </header>
        <div className="details-container w-4/5 m-auto text-center flex flex-col justify-center items-center my-8">
          <Image
            src={recipe.image}
            alt={recipe.label}
            height={300}
            width={200}
          />
          <h2>{recipe.label}</h2>

          <h5>Ingredients</h5>
          <ul>
            {recipe.ingredientLines?.map((item: string, idx: number) => {
              return <li key={idx}>{item}</li>
            })}
       
          </ul>
        </div>
      </div>
    </>
  )
}

export default RecipeDetailsPage
