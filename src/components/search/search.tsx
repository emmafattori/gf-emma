import { MouseEvent } from "react"

// export interface Response {
//   from: 0
//   to: 0
//   count: 0
//   _links: {
//     self: {
//       href: "string"
//       title: "string"
//     }
//     next: {
//       href: "string"
//       title: "string"
//     }
//   }
//   hits: [
//     {
//       recipe: {
//         uri: "string"
//         label: "string"
//         image: "string"
//         images: {
//           THUMBNAIL: {
//             url: "string"
//             width: 0
//             height: 0
//           }
//           SMALL: {
//             url: "string"
//             width: 0
//             height: 0
//           }
//           REGULAR: {
//             url: "string"
//             width: 0
//             height: 0
//           }
//           LARGE: {
//             url: "string"
//             width: 0
//             height: 0
//           }
//         }
//         source: "string"
//         url: "string"
//         shareAs: "string"
//         yield: 0
//         dietLabels: ["string"]
//         healthLabels: ["string"]
//         cautions: ["string"]
//         ingredientLines: ["string"]
//         ingredients: [
//           {
//             text: "string"
//             quantity: 0
//             measure: "string"
//             food: "string"
//             weight: 0
//             foodId: "string"
//           }
//         ]
//         calories: 0
//         glycemicIndex: 0
//         totalCO2Emissions: 0
//         co2EmissionsClass: "A+"
//         totalWeight: 0
//         cuisineType: ["string"]
//         mealType: ["string"]
//         dishType: ["string"]
//         instructions: ["string"]
//         tags: ["string"]
//         externalId: "string"
//         totalNutrients: {}
//         totalDaily: {}
//         digest: [
//           {
//             label: "string"
//             tag: "string"
//             schemaOrgTag: "string"
//             total: 0
//             hasRDI: true
//             daily: 0
//             unit: "string"
//             sub: {}
//           }
//         ]
//       }
//       _links: {
//         self: {
//           href: "string"
//           title: "string"
//         }
//         next: {
//           href: "string"
//           title: "string"
//         }
//       }
//     }
//   ]
// }

export const Search = () => {
  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    getRecipes()
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
