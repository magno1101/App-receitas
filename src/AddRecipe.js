import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addRecipe } from "./api";
import "./estilo.css";
import "./AddRecipe.css";

function AddRecipe() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = { title, ingredients, instructions, imageUrl };
    addRecipe(newRecipe);
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
      navigate("/");
    }, 3000);
  };

  return (
    <div className="container add-recipe-container">
      <h1>Adicionar Nova Receita</h1>
      {showSuccessMessage && (
        <p className="success-message">Receita adicionada com sucesso!</p>
      )}
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label htmlFor="ingredients">Ingredientes:</label>
        <textarea
          id="ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          required
        />

        <label htmlFor="instructions">Modo de Preparo:</label>
        <textarea
          id="instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          required
        />

        <label htmlFor="imageUrl">Link da Imagem:</label>
        <input
          type="text"
          id="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />

        {imageUrl && (
          <img src={imageUrl} alt="Imagem da Receita" className="recipe-image" />
        )}

        <button type="submit" className="add-recipe-button">
          Adicionar Receita
        </button>
      </form>
      <Link to="/" className="link">Voltar para a Lista de Receitas</Link>
    </div>
  );
}

export default AddRecipe;
