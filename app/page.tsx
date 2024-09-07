import { Search } from "@/components/search/search"
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
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;600;700&display=swap"
          rel="stylesheet"
        ></Link>
      </Head>
      <main className="">
        <Header />
        <Banner />
        <Search />
        {/* <ul>
          {recipes.map((recipe, index: number) => {
            return <li key={index}>{recipe.recipe.label}</li>
          })}
        </ul> */}
      </main>
    </>
  )
}
const APP_ID = "cb42b4a6"
const APP_KEY = "dfa5b9f944acbf6422e2d2e3c90649e2"

// export async function getStaticProps() {
//   const recipes = await fetch(
//     `https://api.edamam.com/api/recipes/v2?type=public&q=&app_id=${APP_ID}&app_key=${APP_KEY}
//     `
//   ).then((res) => res.json())

//   return {
//     props: {
//       recipes: recipes.hits
//     }
//   }
// }
