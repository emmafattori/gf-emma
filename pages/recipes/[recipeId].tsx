// pages/[recipeId].tsx
import { useRouter } from "next/router"
import "../../src/globals.css"
import Image from "next/image"
import Link from "next/link"

const RecipeDetailsPage = () => {
  const router = useRouter()
  const { query } = router

  const recipe = query
  return (
    <>
      <div className="w-4/5 m-auto my-4">
        <Link href={"/"} className="flex">
          <Image
            src="/left-arrow.png"
            alt=""
            width={25}
            height={25}
            className="mx-5"
          />{" "}
          Back to home
        </Link>
        <header className="text-center">
          <h1 className="text-4xl">{recipe.label}</h1>
        </header>
        <div className="details-container w-4/5 m-auto text-center flex flex-col justify-center items-center my-8">
          <Image
            src={recipe.image}
            alt={recipe.label}
            height={300}
            width={200}
          />
          <h2>{recipe.label}</h2>

          <h5 className="text-lg font-semibold my-7">Ingredients</h5>
          <ul className="bg-white w-3/4 mx-auto rounded-xl p-4 m-4">
            {recipe.ingredientLines.map((item, idx) => {
              return <li key={idx}>{item}</li>
            })}
          </ul>
        </div>
      </div>
    </>
  )
}

export default RecipeDetailsPage
