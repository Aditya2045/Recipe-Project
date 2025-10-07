import { useContext } from "react";
import { recipecontext } from "../context/Recipecontext";
import RecipeCard from "../components/RecipeCard";

const Recipes = () => {
  const { data } = useContext(recipecontext);
  const renderRecipes = data.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe}/>
  ));

  return (
  <div className="min-h-screen  text-white px-4 sm:px-8 py-10 overflow-y-auto">
     <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-yellow-400">All Recipes</h1>
    <div className="flex flex-wrap justify-center gap-6">{renderRecipes}</div>
  </div>
)
};

export default Recipes;




