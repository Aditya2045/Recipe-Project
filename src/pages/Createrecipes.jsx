import { nanoid } from "nanoid";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipecontext } from "../context/Recipecontext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Createrecipes = () => {
  const navigate = useNavigate()

  const {data, setdata} = useContext(recipecontext); 

  const { register, handleSubmit, reset } = useForm();

  const Submithandler = (recipe) =>{
    recipe.id = nanoid()
    console.log(recipe);
   
    const copydata = [...data]
    copydata.push(recipe)
    setdata(copydata)
    localStorage.setItem("recipes",JSON.stringify(copydata))
    // setdata([...data, recipe])

    toast.success("Recipe created")
    reset()
    navigate("/recipes")
  }

  return (
    <div className="min-h-screen  text-white flex items-center justify-center px-4 md:px-8 py-10 overflow-y-auto">
    <form className="w-full max-w-lg bg-zinc-800 p-6 sm:p-10 rounded-2xl shadow-lg flex flex-col gap-4" onSubmit={handleSubmit(Submithandler)}>
      <input
        className=" bg-zinc-700 border-b border-zinc-600 p-3 rounded-md outline-none focus:border-yellow-400"
        {...register("image")}
        type="url"
        placeholder="Enter Image URL"
      />

      <input
        className="bg-zinc-700 border-b border-zinc-600 p-3 rounded-md outline-none focus:border-yellow-400"
        {...register("title")}
        type="text"
        placeholder="Recipe Title"
      />

     <textarea
        className="bg-zinc-700 border-b border-zinc-600 p-3 rounded-md outline-none focus:border-yellow-400"
        {...register("description")}
        placeholder="Recipe Description"
      ></textarea>

      <textarea
        className="bg-zinc-700 border-b border-zinc-600 p-3 rounded-md outline-none focus:border-yellow-400"
        {...register("Ingredients")}
        placeholder="Recipe Ingredients"
      ></textarea>

      <textarea
        className="bg-zinc-700 border-b border-zinc-600 p-3 rounded-md outline-none focus:border-yellow-400"
        {...register("Instruction")}
        placeholder="//Instruction"
      ></textarea>

      <select
        className="bg-zinc-700 border-b border-zinc-600 p-3 rounded-md outline-none focus:border-yellow-400"
        {...register("category")}
      >
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
      </select>

      <button className="block px-4 py-2 bg-teal-600 text-white rounded mt-5">
        Save Recipe
      </button>
    </form>
    </div>
  );
};

export default Createrecipes;



