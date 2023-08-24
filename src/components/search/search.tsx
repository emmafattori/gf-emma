import { ChangeEvent, MouseEvent, useEffect, useState } from "react"
import Link from "next/link"
import { Recipe, getRecipes } from "@/pages/api/getRecipes"
export interface SearchProps {
  query?: string | null
}

export const Search = ({ query }: SearchProps) => {
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [input, setInput] = useState("")

  const handleSubmit = () => {
    getRecipes(input)
      .then((fetchedRecipes) => {
        setRecipes(fetchedRecipes.hits)
        // console.log(fetchedRecipes.hits)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  return (
    <section id="#search" className="p-8 w-full flex flex-col bg-black">
      <div className="">
        <div className="flex flex-col items-center">
          <label htmlFor="search" className="text-lg uppercase text-white">
            Search for a new recipe
          </label>
          <input
            id="search"
            type="text"
            className="searchInput w-2/4 m-3"
            onChange={handleChange}
            placeholder="Chicken Tacos"
          ></input>
        </div>
      </div>

      <div className="">Results:</div>
      <button
        className="border p-2 text-white"
        type="submit"
        onClick={handleSubmit}
      >
        Search
      </button>
      <ul className="results bg-white">
        {recipes.map((recipe: any, index) => (
          <li key={index}>
            <Link href={`/recipes/${index}`}>{recipe.recipe.label}</Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
