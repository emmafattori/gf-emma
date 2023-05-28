import { MouseEvent } from "react"

export const Search = () => {
  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    console.log("it worked")
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
