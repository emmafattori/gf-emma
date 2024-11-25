"use client";
import { useState, ChangeEvent } from "react";
import Link from "next/link";
import { Recipe, getRecipes } from "../../../app/api/getRecipes";

export const Search = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    getRecipes(`gluten free ${input}`)
      .then((fetchedRecipes) => {
        setRecipes(fetchedRecipes.hits);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  console.log(recipes)
  return (
    <section id="#search" className="p-8 w-full flex flex-col bg-black">
      <div className="">
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
            <Link href={`/recipes/${index}`}>
              {recipe.recipe.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
