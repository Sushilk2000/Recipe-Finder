import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MdOutlineBookmarkAdd, MdBookmarkAdd } from "react-icons/md";
function RecipeDetails() {
  const [recipe, setRecipe] = useState({});
  const [isSaved, setIsSaved] = useState(false);

  const APIiD = "173e0cdf";
  const APIkey = "b165bf84317c36859fdc884344575135";

  const url = useLocation();
  const path = url.pathname.split("/")[2];

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://api.edamam.com/api/recipes/v2/${path}?type=public&app_id=${APIiD}&app_key=${APIkey}`
        );
        const data = await response.json();
        setRecipe(data);
        const arr = JSON.parse(localStorage.getItem("Saved_Recipes")) || [];
        setIsSaved(arr.some((item) => item.recipe.uri === data.recipe.uri));
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [path]);

  function deleteRecipe() {
    const arr = JSON.parse(localStorage.getItem("Saved_Recipes")) || [];
    const updatedArr = arr.filter(
      (item) => item.recipe.label !== recipe.recipe.label
    );
    localStorage.setItem("Saved_Recipes", JSON.stringify(updatedArr));
    setIsSaved(false);
  }

  function addRecipe() {
    const arr = JSON.parse(localStorage.getItem("Saved_Recipes")) || [];
    const updatedArr = [...arr, recipe];
    localStorage.setItem("Saved_Recipes", JSON.stringify(updatedArr));
    setIsSaved(true);
  }

  if (!recipe.recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-amber-50 bg-opacity-50">
      <div className="flex items-center w-full h-[712px] border">
        <div className="w-1/2 h-full">
          <img
            src={recipe?.recipe?.image}
            alt=""
            className="w-full h-[710px] object-cover"
          />
        </div>
        <div className="w-1/2 flex-col flex text-center items-center justify-center gap-6">
          <p className="text-3xl font-semibold text-center w-2/3">
            {recipe?.recipe.label}
          </p>
          <button
            className="btn btn-outline rounded-none"
            onClick={isSaved ? deleteRecipe : addRecipe}
          >
            {isSaved ? (
              <MdBookmarkAdd size={24} />
            ) : (
              <MdOutlineBookmarkAdd size={24} />
            )}
            SAVE RECIPE
          </button>
          <div className="flex gap-4">
            {recipe?.recipe?.healthLabels?.slice(0, 3).map((label) => (
              <button className="text-black btn" key={label}>
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="flex mt-6 mx-2 justify-center gap-16">
        <div>
          <p className="text-2xl font-semibold">Ingredients</p>
          <div className="flex flex-col gap-4">
            {recipe?.recipe?.ingredients?.map((ingredient) => (
              <div
                className="flex px-2 py-1 border shadow-md rounded-md w-[40rem] cursor-pointer"
                key={ingredient.food}
              >
                <div className="w-24 h-24">
                  <img
                    src={ingredient.image}
                    alt=""
                    className="w-24 h-24 rounded-md"
                  />
                </div>
                <div className="flex flex-col ">
                  <p className="font-bold  pl-2">{ingredient.text}</p>
                  <div className="flex gap-2 pl-2">
                    <p>
                      Quantity:{" "}
                      <span className="font-bold">{ingredient.quantity}</span>
                    </p>
                    <p>
                      Measure:{" "}
                      <span className="font-bold">
                        {ingredient.measure ? ingredient.measure : "NA"}
                      </span>
                    </p>
                    <p>
                      Food: <span className="font-bold">{ingredient.food}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="border px-16 bg-orange-50 bg-opacity-50 py-4">
          <p className="text-2xl font-semibold">Nutrients</p>
          <div className="flex flex-col gap-4">
            {recipe?.recipe?.digest?.map((item) => (
              <div className="w-max" key={item.label}>
                <div className="flex justify-between min-w-64 font-semibold">
                  <p>{item.label}</p>
                  <p>{Math.floor(item.total)}</p>
                </div>
                <div>
                  {item?.sub?.map((sub) => (
                    <div className="pl-6 flex justify-between" key={sub.label}>
                      <p>{sub.label}</p>
                      <p>{Math.floor(sub.total)}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetails;
