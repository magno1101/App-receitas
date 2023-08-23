import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchRecipes } from "./api";
import "./estilo.css";
import "./RecipeList.css";

function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchedRecipes = fetchRecipes();
    setRecipes(fetchedRecipes);
  }, []);

  return (
    <div className="recipe-list-container">
      <h1>Lista de Receitas</h1>
      <ul className="recipe-list">
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <img
              src={recipe.imageUrl}
              alt={`Imagem de ${recipe.title}`}
              className="recipe-image"
            />
            <Link to={`/recipe/${recipe.id}`} className="recipe-title">
              {recipe.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;
