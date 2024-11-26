import { ChangeEvent, useState } from "react";
import Link from "next/link"
import { getRecipes, Recipe } from "../../../app/api/getRecipes";
// Simple slugify function
const slugify = (str: string) => {
  return str
    .toLowerCase()
    .replace(/\s+/g, '-')         // Replace spaces with hyphens
    .replace(/[^\w\-]+/g, '')     // Remove non-word characters
    .replace(/\-\-+/g, '-')       // Replace multiple hyphens with a single hyphen
    .replace(/^-+/, '')           // Remove leading hyphens
    .replace(/-+$/, '');          // Remove trailing hyphens
};

export const Search = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    getRecipes(`gluten free ${input}`)
      .then((fetchedRecipes) => {
        setRecipes(fetchedRecipes.hits);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <section id="#search" className="p-8 w-full flex flex-col bg-black">
      <div className="flex flex-col items-center">
        <label htmlFor="search" className="text-lg uppercase text-white">
          Search for a new recipe
        </label>
        <input
          id="search"
          type="text"
          className="searchInput w-2/4 m-3"
          onChange={handleChange}
          placeholder="Chicken Tacos"
        />
      </div>

      <div className="">Results:</div>
      <button
        className="border p-2 text-white"
        type="submit"
        onClick={handleSubmit}
      >
        Search
      </button>
      <ul className="results bg-white">
        {recipes.map((recipe, index) => (
          <li key={index}>
            <Link
              href={`/recipes/${slugify(recipe.recipe.label)}`} // Slugify recipe.label for the URL
            >
              {recipe.recipe.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
