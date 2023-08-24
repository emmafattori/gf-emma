import { Search } from "@/components/search/search"
import "../globals.css"
import { Header } from "@/components/header/header"
import Head from "next/head"
import { Banner } from "@/components/banner/banner"
import Link from "next/link"

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
        <Link rel="preconnect" href="https://fonts.gstatic.com"></Link>
        <Link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;800&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        ></Link>
      </Head>
      <main className="">
        <Header />
        <Banner />
        <Search />
      </main>
    </>
  )
}
