import { MouseEvent, useState } from "react"

export const Search = () => {
  const [data, setData] = useState(null)

  const fetchData = async () => {
    try {
      const query = "gluten free"
      const appID = "cb42b4a6"
      const appKey = "dfa5b9f944acbf6422e2d2e3c90649e2"
      const url = `https://api.edamam.com/search?q=${query}&app_id=${appID}&app_key=${appKey}`

      const response = await fetch(url)
      const jsonData = await response.json()

      setData(jsonData)
      console.log(data)
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }
  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    fetchData()
  }

  const axios = require("axios")

  const getRecipes = () => {
    const options = {
      method: "GET",
      url: "https://api.edamam.com/api/recipes/v2",
      params: {
        q: "gluten free"
      },
      headers: {
        app_id: "cb42b4a6",
        app_key: "dfa5b9f944acbf6422e2d2e3c90649e2"
      }
    }
    axios
      .request(options)
      .then(({ data }: { data: any }) => {
        console.log(data)
      })
      .catch((error: any) => {
        console.error(error)
      })
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
