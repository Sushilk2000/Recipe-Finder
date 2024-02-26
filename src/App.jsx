import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header/header";
import Home from "./Main/Home";
import RecipeDetails from "./Main/recipeDetails";
import { useState } from "react";
import SavedRecipes from "./Main/savedRecipes";
function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Saved_Recipes" element={<SavedRecipes />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
