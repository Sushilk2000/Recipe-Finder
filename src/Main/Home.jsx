import SearchFunc from "./Search";
import RecipeList from "./recipes";
import { useState } from "react";
function Home() {
  const [searchInput, setSearchInput] = useState("");
  return (
    <div className="min-h-[90vh] bg-white">
      <SearchFunc
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      ></SearchFunc>
      <RecipeList searchInput={searchInput} />
    </div>
  );
}

export default Home;
