import { Link } from "react-router-dom";

const RecipeCard = (props) => {
  const { id, image, title, desc } = props.recipe;
  return (
    <Link
      to={`/recipes/details/${id}`}
      className="duration-150 hover:scale-103 mr-3 mb-3 block w-[20vw] rounded overflow-hidden shadow p-1"
    >
      <img className="w-full h-[30vh] object-cover" src={image} />
      <h1 className="mt-2 font-black p-2">{title}</h1>
      <p className="px-2 pb-3">
        {desc}...{""}
        <small className="text-blue-400">more</small>
      </p>
    </Link>
  );
};

export default RecipeCard;
