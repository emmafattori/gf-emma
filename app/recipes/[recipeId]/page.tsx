import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

// Simulate the API call (replace with your actual API fetching logic)
async function getRecipeByUri(recipeUri: string) {
  const response = await fetch(`${recipeUri}`);
  if (!response.ok) {
    throw new Error("Recipe not found");
  }
  const data = await response.json();
  return data.recipe;
}

interface RecipeDetailsPageProps {
  params: { recipeId: string, recipeUri: string };
}

// Optional dynamic metadata generation
export async function generateMetadata({
  params,
}: RecipeDetailsPageProps): Promise<Metadata> {
  return {
    title: `Recipe Details - ${params.recipeId}`,
  };
}

const RecipeDetailsPage = async ({ params }: RecipeDetailsPageProps) => {
  const { recipeId, recipeUri } = params;

  try {
    // Fetch recipe details by recipeId
    const recipe = await getRecipeByUri(recipeUri);

    if (!recipe) {
      return <p>Recipe not found.</p>;
    }

    return (
      <div className="w-4/5 m-auto my-4">
        <Link href="/" className="flex">
          <Image
            src="/left-arrow.png"
            alt="Back"
            width={25}
            height={25}
            className="mx-5"
          />
          Back to home
        </Link>
        <header className="text-center text-white">
          <h1 className="text-4xl text-white">{recipe.label}</h1>
        </header>
        <div className="details-container w-4/5 m-auto text-center flex flex-col justify-center items-center my-8">
          {recipe.image && (
            <Image
              src={recipe.image}
              alt={recipe.label}
              height={300}
              width={200}
            />
          )}
          <h2>{recipe.label}</h2>

          <h5 className="text-lg font-semibold my-7">Ingredients</h5>
          <ul className="bg-white w-3/4 mx-auto rounded-xl p-4 m-4">
            {recipe.ingredientLines.map((item: string, idx: number) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  } catch (error) {
    console.error(error);
    return <p>Recipe not found or an error occurred.</p>;
  }
};

export default RecipeDetailsPage;
