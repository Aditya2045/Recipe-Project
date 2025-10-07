import { useContext, useEffect } from "react";
import { recipecontext } from "../context/Recipecontext";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Singlerecipe = () => {
  const navigate = useNavigate();
  const { data, setdata } = useContext(recipecontext);
  const params = useParams();

  const recipe = data.find((recipe) => params.id == recipe.id);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: recipe?.title,
      image: recipe?.image,
      desc: recipe?.desc,
      ingredients: recipe?.ingredients,
      category: recipe?.category,
    },
  });

  const Submithandler = (recipeData) => {
    const index = data.findIndex((r) => params.id == r.id);
    const updated = [...data];
    updated[index] = { ...updated[index], ...recipeData };
    setdata(updated);
    localStorage.setItem("recipes", JSON.stringify(updated));
    toast.success("Recipe updated!");
  };

  const deleteHandler = () => {
    const filtered = data.filter((r) => r.id != params.id);
    setdata(filtered);
    localStorage.setItem("recipes", JSON.stringify(filtered));
    toast.error("Recipe deleted!");
    navigate("/recipes");
  };


  if (!recipe) return <p className="text-center py-10 text-zinc-400">Loading...</p>;

  return (
    <div className="flex flex-col md:flex-row gap-10 md:gap-6 p-5 md:p-10  min-h-screen text-white">
      {/* Left section (Image + Title) */}
      <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 text-yellow-400">
          {recipe.title}
        </h1>
        <div className="w-full max-w-md rounded-xl overflow-hidden shadow-lg">
          <img
            className="w-full h-64 md:h-[50vh] object-cover"
            src={recipe.image}
            alt={recipe.title}
          />
        </div>
      </div>

      {/* Right section (Form) */}
      <form
        className="md:w-1/2 w-full  p-6 rounded-xl shadow-md flex flex-col gap-4"
        onSubmit={handleSubmit(Submithandler)}
      >
        <input
          {...register("image")}
          type="url"
          placeholder="Enter Image URL"
          className="block w-full bg-zinc-700 border-b border-zinc-600 p-3 rounded-md outline-none focus:border-yellow-400"
        />

        <input
          {...register("title")}
          type="text"
          placeholder="Recipe Title"
          className="block w-full bg-zinc-700 border-b border-zinc-600 p-3 rounded-md outline-none focus:border-yellow-400"
        />

        <textarea
          {...register("desc")}
          placeholder="Recipe Description"
          rows="3"
          className="block w-full bg-zinc-700 border-b border-zinc-600 p-3 rounded-md outline-none focus:border-yellow-400"
        ></textarea>

        <textarea
          {...register("ingredients")}
          placeholder="Recipe Ingredients"
          rows="3"
          className="block w-full bg-zinc-700 border-b border-zinc-600 p-3 rounded-md outline-none focus:border-yellow-400"
        ></textarea>

        <textarea
          {...register("Instruction")}
          placeholder="Recipe Instructions"
          rows="3"
          className="block w-full bg-zinc-700 border-b border-zinc-600 p-3 rounded-md outline-none focus:border-yellow-400"
        ></textarea>

        <select
          {...register("category")}
          className="block w-full bg-zinc-700 border-b border-zinc-600 p-3 rounded-md outline-none focus:border-yellow-400"
        >
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
        </select>

        <div className="flex flex-col sm:flex-row gap-4 mt-5">
          <button
            type="submit"
            className="flex-1 px-4 py-3 bg-blue-700 hover:bg-blue-800 rounded-md text-white font-semibold transition-all"
          >
            Update Recipe
          </button>
          <button
            type="button"
            onClick={deleteHandler}
            className="flex-1 px-4 py-3 bg-red-700 hover:bg-red-800 rounded-md text-white font-semibold transition-all"
          >
            Delete Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default Singlerecipe;

