import { Header } from "../header/header"
import { Search } from "../search/search"

export const Banner = () => {
  return (
    <section className="bg-[url('/health-food.jpg')] bg-cover bg-center h-screen backdrop-brightness-50">
      {/* <Header /> */}
      <div className="flex items-center justify-center h-full bg-transparent align-center flex-col backdrop-brightness-50">
        <div className="header-container flex-col text-center p-4 flex bg-white h-60 w-60 rounded-full justify-center items-center">
          <h1 className="text-black  text-center">Gluten Free Meal Planning</h1>
        </div>
      </div>
    </section>
  )
}
