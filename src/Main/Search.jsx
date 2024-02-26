import { useState } from "react";

function SearchFunc({ searchInput, setSearchInput }) {
  return (
    <div
      className={`flex items-center justify-center mt-10 ${
        searchInput == "" && "h-[82.5vh] items-center mt- 0  w-full"
      } ease-in-out transition-all duration-700 bg-white`}
    >
      <input
        className="border text-start border-black btn min-h-0  shadow-inherit shadow-lg bg-white outline-none hover:border-black w-1/3 h-10 rounded-full"
        type="text"
        placeholder="search by keywords"
        onChange={(e) => {
          setSearchInput(e.currentTarget.value);
          console.log(e.currentTarget.value);
        }}
      />
    </div>
  );
}

export default SearchFunc;
