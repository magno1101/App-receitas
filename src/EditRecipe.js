import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchRecipeById, updateRecipe } from "./api";
import { Link, useNavigate } from "react-router-dom";
import "./EditRecipe.css";

function EditRecipe() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [imageUrl, setImageUrl] = useState(""); // Novo estado para a imagem
  const [isSuccessMessageVisible, setIsSuccessMessageVisible] = useState(false);

  useEffect(() => {
    const fetchedRecipe = fetchRecipeById(parseInt(id));
    if (fetchedRecipe) {
      setTitle(fetchedRecipe.title);
      setIngredients(fetchedRecipe.ingredients);
      setInstructions(fetchedRecipe.instructions);
      setImageUrl(fetchedRecipe.imageUrl); // Preenche o estado da imagem
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedRecipe = {
      id: parseInt(id),
      title,
      ingredients,
      instructions,
      imageUrl, // Inclui a imagem no objeto
    };
    updateRecipe(updatedRecipe);
    setIsSuccessMessageVisible(true);
  };

  return (
    <div className="edit-recipe-container">
      <h1>Editar Receita</h1>
      {isSuccessMessageVisible && (
        <div className="success-message">Receita editada com sucesso!</div>
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

        {/* Exibe a imagem */}
        {imageUrl && (
          <img src={imageUrl} alt="Imagem da Receita" className="recipe-image" />
        )}

        <button type="submit" className="edit-recipe-button">Salvar Edições</button>
      </form>
      <Link to="/" className="link">Voltar para a Lista de Receitas</Link>
    </div>
  );
}

export default EditRecipe;