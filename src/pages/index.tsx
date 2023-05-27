import { Search } from "@/components/search/search"
import "../globals.css"
import { Header } from "@/components/header/header"

export default function Home() {
  return (
    <main className=" min-h-screen p-5">
      <Header />
      <Search />
    </main>
  )
}
