import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchRecipeById, deleteRecipe } from "./api";
import "./RecipeDetail.css"; 

function RecipeDetail() {
  const { id } = useParams();
  const navigate = useNavigate(); 
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchedRecipe = fetchRecipeById(parseInt(id));
    setRecipe(fetchedRecipe);
  }, [id]);

  const handleDelete = () => {
    deleteRecipe(parseInt(id));
    navigate("/", { replace: true });
  };

  if (!recipe) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="recipe-detail-container">
      <img
        src={recipe.imageUrl}
        alt={`Imagem de ${recipe.title}`}
        className="recipe-image"
      />
      <h1>{recipe.title}</h1>
      <p>Ingredientes: {recipe.ingredients}</p>
      <p>Modo de Preparo: {recipe.instructions}</p>
      <div className="button-container">
        <button onClick={handleDelete} className="delete-button">
          Excluir Receita
        </button>
        <button
          onClick={() => navigate(`/edit/${id}`)} 
          className="edit-button"
        >
          Editar Receita
        </button>
      </div>
    </div>
  );
}

export default RecipeDetail;
