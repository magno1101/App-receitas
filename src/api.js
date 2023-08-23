
const RECIPES_KEY = "recipes";

export function fetchRecipes() {
  const recipes = JSON.parse(localStorage.getItem(RECIPES_KEY)) || [];
  return recipes;
}

export function fetchRecipeById(id) {
  const recipes = fetchRecipes();
  return recipes.find((recipe) => recipe.id === id);
}

export function addRecipe(recipe) {
  const recipes = fetchRecipes();
  const newRecipe = { ...recipe, id: recipes.length + 1 };
  const updatedRecipes = [...recipes, newRecipe];
  localStorage.setItem(RECIPES_KEY, JSON.stringify(updatedRecipes));
  return newRecipe;
}

export function updateRecipe(updatedRecipe) {
  const recipes = fetchRecipes();
  const index = recipes.findIndex((recipe) => recipe.id === updatedRecipe.id);

  if (index !== -1) {
    recipes[index] = updatedRecipe;
    localStorage.setItem(RECIPES_KEY, JSON.stringify(recipes));
    return updatedRecipe;
  }

  return null;
}

export function deleteRecipe(id) {
  const recipes = fetchRecipes();
  const updatedRecipes = recipes.filter((recipe) => recipe.id !== id);
  localStorage.setItem(RECIPES_KEY, JSON.stringify(updatedRecipes));
}
