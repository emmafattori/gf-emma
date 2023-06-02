import { MouseEvent, useState } from "react"

export const Search = () => {
  const [data, setData] = useState()
  const query = "gluten free"
  const APP_ID = "cb42b4a6"
  const APP_KEY = "dfa5b9f944acbf6422e2d2e3c90649e2"
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    )
    const recipeData = await response.json()
    setData(recipeData)
    console.log(recipeData)
  }
  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    getRecipes()
  }

  return (
    <div>
      <label htmlFor="search">Search for a new recipe</label>
      <input id="search"></input>
      <div className="">Results:</div>
      <button type="submit" onClick={handleSubmit}>
        Search
      </button>
    </div>
  )
}
