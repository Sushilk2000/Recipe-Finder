import React, { useEffect, useState } from "react";
import RecipeCard from "./recipeCard";
function RecipeList({ searchInput }) {
  const [recipes, setRecipes] = useState(null); // Initialize to null
  const APIiD = "173e0cdf";
  const APIkey = "b165bf84317c36859fdc884344575135";
  async function fetchData() {
    try {
      const response = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${searchInput}&app_id=${APIiD}&app_key=${APIkey}`
      );
      const data = await response.json();
      setRecipes(data.hits);
      console.log(data.hits);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, [searchInput]);
  
  return (
    <div className="flex flex-wrap gap-8 gap-y-16 justify-center mt-8">
      {recipes?.map((recipe) => (
        <RecipeCard
          recipe={recipe.recipe}
          url={recipe._links.self.href}
          key={recipe.recipe.uri}
        />
      ))}
    </div>
  );
}

export default RecipeList;
