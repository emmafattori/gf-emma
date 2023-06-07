import { MouseEvent, useEffect, useState } from "react"

export const Search = () => {
  const [data, setData] = useState(Array<{}>)
  const recipeArr = []
  const query = "gluten free"
  const APP_ID = "cb42b4a6"
  const APP_KEY = "dfa5b9f944acbf6422e2d2e3c90649e2"
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    )
    if (!response.ok) {
      throw new Error("Failed to fetch")
    }
    const recipeData = await response.json()
    return recipeData
  }
  // useEffect(() => {

  // }, [])

  const handleSubmit = () => {
    getRecipes()
      .then((fetchedRecipes) => {
        setData(fetchedRecipes.hits)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  console.log(data)

  return (
    <div>
      <label htmlFor="search">Search for a new recipe</label>
      <input id="search"></input>
      <div className="">Results:</div>
      <button type="submit" onClick={handleSubmit}>
        Search
      </button>
      <div className="results">
        {data.map((recipe, idx) => (
          <li key={idx}>{idx}</li>
        ))}
      </div>
    </div>
  )
}
