import RecipeCard from "./recipeCard";
function SavedRecipes() {
  console.log(JSON.parse(localStorage.getItem("Saved_Recipes")));
  return (
    <>
      <div className="text-3xl font-semibold text-center mt-4">
        Saved Recipes
      </div>
      <div className="flex flex-wrap gap-8 gap-y-16 justify-left mt-8">
        {JSON.parse(localStorage.getItem("Saved_Recipes"))?.map((recipe) => (
          <RecipeCard
            recipe={recipe.recipe}
            url={recipe._links.self.href}
            key={recipe.recipe.uri}
          />
        ))}
      </div>
    </>
  );
}

export default SavedRecipes;
