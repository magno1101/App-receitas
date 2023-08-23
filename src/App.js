import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import RecipeList from "./RecipeList";
import RecipeDetail from "./RecipeDetail";
import AddRecipe from "./AddRecipe";
import EditRecipe from "./EditRecipe";
import "./estilo.css";
import "./App.css";

function App() {
  return (
    <Router>
      <div id="root">
        <Header />
        <div className="main-content">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/add">Adicionar Receita</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<RecipeList />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
            <Route path="/add" element={<AddRecipe />} />
            <Route path="/edit/:id" element={<EditRecipe />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
