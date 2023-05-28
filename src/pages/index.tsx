import { Search } from "@/components/search/search"
import "../globals.css"
import { Header } from "@/components/header/header"
import Head from "next/head"

export default function Home() {
  const metadata = {
    title: "Emma Meal Planning",
    description: "Gluten Free Recipes"
  }
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <main className=" min-h-screen p-5">
        <Header />
        <Search />
      </main>
    </>
  )
}
