import { Search } from "@/components/search/search"
import "../globals.css"
import { Header } from "@/components/header/header"
import Head from "next/head"
import { Banner } from "@/components/banner/banner"

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
      <main className="">
        <Header />
        <Banner />
        <Search />
      </main>
    </>
  )
}
