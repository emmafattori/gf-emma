import { Search } from "../search/search"

export const Banner = () => {
  return (
    <section className="h-5 bg-[url('/health-food.jpg')] min-h-screen bg-cover bg-center">
      <div className="backdrop-brightness-75 min-h-screen flex flex-col justify-center items-center">
        <div className="header-container bg-white w-4/5 flex-col text-center p-4 ">
          <h1 className="text-black bg-white">Gluten Free Meal Planning</h1>
        </div>
        <a className="border m-3 p-2 text-white" href="#search">
          Search for a GF meal
        </a>
      </div>
    </section>
  )
}
