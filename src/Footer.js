import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Aplicativo de Receitas</p>
    </footer>
  );
}

export default Footer;
