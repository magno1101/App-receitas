import React from "react";
import { Link } from "react-router-dom";
import "./estilo.css"; 
import "./Header.css"; 

function Header() {
    return (
        <header className="container header-container">
            <Link to="/">Receitas da Vovó</Link>
        </header>
    );
}

export default Header;
