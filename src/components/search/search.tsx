import { ChangeEvent, MouseEvent, useEffect, useState } from "react"

export interface SearchProps {
  query?: string | null
}

export const Search = ({ query }: SearchProps) => {
  const [data, setData] = useState(Array<{}>)
  const [input, setInput] = useState("")
  const APP_ID = "cb42b4a6"
  const APP_KEY = "dfa5b9f944acbf6422e2d2e3c90649e2"
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${input}&app_id=${APP_ID}&app_key=${APP_KEY}`
    )
    if (!response.ok) {
      throw new Error("Failed to fetch")
    }
    const recipeData = await response.json()
    return recipeData
  }

  const handleSubmit = () => {
    getRecipes()
      .then((fetchedRecipes) => {
        setData(fetchedRecipes.hits)
        console.log(fetchedRecipes.hits)
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
        {data.map((recipe: any, idx) => (
          <li key={idx}>{recipe.recipe.label}</li>
        ))}
      </ul>
    </section>
  )
}
