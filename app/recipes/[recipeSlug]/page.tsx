"use client";  // Add this line to mark the file as a Client Component

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/legacy/image";
import Link from "next/link";
import slugify from "slugify"; // Slugify function

const APP_ID = "cb42b4a6";
const APP_KEY = "dfa5b9f944acbf6422e2d2e3c90649e2";

// Define the Recipe and ApiResponse interfaces
export interface Recipe {
  recipe: {
    label: string;
    mealType: string[];
    calories: number;
    ingredients: string[];
    image: string;
  };
}

interface ApiResponse {
  hits: Recipe[];
}

// Fetch recipes based on a search term
export const getRecipes = async (
  searchTerm: string | string[]
): Promise<ApiResponse> => {
  const response = await fetch(
    `https://api.edamam.com/api/recipes/v2?type=public&q=${searchTerm}&app_id=${APP_ID}&app_key=${APP_KEY}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch");
  }
  const recipeData = await response.json();
  return recipeData;
};

const RecipeDetailsPage = () => {
  const { recipeSlug } = useParams(); // Access dynamic route parameter using `useParams`
  
  // Ensure recipeSlug is a string (it could be an array)
  const recipeSlugString = Array.isArray(recipeSlug) ? recipeSlug[0] : recipeSlug;
  
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Normalize string by removing special characters and excess spaces
  const normalizeString = (str: string) => {
    return str
      .replace(/[^\w\s]/gi, '') // Remove special characters
      .replace(/\s+/g, ' ')      // Normalize multiple spaces to a single space
      .trim();
  };

  // Fetch recipes on mount
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setLoading(true);
        const fetchedRecipes = await getRecipes("gluten free");
        console.log("Fetched Recipes:", fetchedRecipes);  // Log the fetched recipes
        setRecipes(fetchedRecipes.hits);
      } catch (err) {
        setError("Failed to load recipes.");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []); // Empty dependency array means it runs once when the component mounts

  // Slugify the recipeSlug and compare it to each recipe's label
  const slugifiedRecipeSlug = slugify(normalizeString(recipeSlugString), { lower: true });
  console.log("Normalized Slugified URL Recipe Slug:", slugifiedRecipeSlug);

  // Find the recipe that matches the recipeSlug
  const recipe = recipes.find((r) => {
    const normalizedLabel = normalizeString(r.recipe.label);
    const slugifiedLabel = slugify(normalizedLabel, { lower: true });
    console.log("Normalized Slugified Recipe Label:", slugifiedLabel);
    return slugifiedLabel === slugifiedRecipeSlug;
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  if (!recipe) {
    return <div>Recipe not found!</div>;
  }

  // Render recipe details
  return (
    <>
      <div className="w-4/5 m-auto my-4">
        <Link href={"/"} className="flex">
          <Image
            src="/left-arrow.png"
            alt="Back"
            width={25}
            height={25}
            className="mx-5"
          />
          Back to home
        </Link>
        <header className="text-center">
          <h1 className="text-4xl">{recipe.recipe.label}</h1>
        </header>
        <div className="details-container w-4/5 m-auto text-center flex flex-col justify-center items-center my-8">
          {recipe.recipe.image && (
            <Image
              src={recipe.recipe.image}
              alt={recipe.recipe.label}
              height={300}
              width={200}
            />
          )}
          <h2 className="text-2xl mt-4">{recipe.recipe.label}</h2>

          <h5 className="text-lg font-semibold my-7">Ingredients</h5>
          <ul className="bg-white w-3/4 mx-auto rounded-xl p-4 m-4">
            {recipe.recipe.ingredients.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>

          <div className="mt-4">
            <h5 className="font-semibold">Calories: {recipe.recipe.calories.toFixed(2)}</h5>
            <h5 className="font-semibold">Meal Types: {recipe.recipe.mealType.join(", ")}</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeDetailsPage;
