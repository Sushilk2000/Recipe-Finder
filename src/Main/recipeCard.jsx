import { Link } from "react-router-dom";
function RecipeCard({ recipe, url }) {
  const split = url?.split("/");
  const id = split[split.length - 1].split("?")[0];
  return (
    <Link to={`/recipes/${id}`}>
      <div className="px-2 py-1 shadow-md rounded-md flex flex-col gap-4 cursor-pointer">
        <div className="flex flex-wrap justify-center">
          <div className="w-[20rem] h-[20rem] pr-1 ">
            <img
              src={recipe?.image}
              alt=""
              className="w-full object-cover rounded-md"
            />
          </div>
          <div className="w-[18rem] flex flex-col gap-4 px-2  h-[20rem] overflow-hidden">
            <span className="text-center text-gray-700 py-1 text-xl font-semibold">
              Ingradients
            </span>
            <div className="hover:overflow-y-auto flex flex-col gap-4">
              {recipe?.ingredientLines?.map((ingredient, index) => (
                <p key={index} className="font-medium text-black">
                  {ingredient}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="text-center mb-4 font-bold text-xl hover:text-green-600">
          <h2>{recipe?.label}</h2>
        </div>
      </div>
    </Link>
  );
}

export default RecipeCard;
