import React, { useState, useRef } from "react";
import "./NavBar.css";
import logo from "../assets/Logo.png";
import profile from "../assets/profile.png";
import plus from "../assets/plus-sign.png";
import products from "../assets/package.png";

const NavBar = () => {
  // Tooltip para o botão "Novo produto"
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipTimeout = useRef(null);

  function handleMouseEnter() {
    tooltipTimeout.current = setTimeout(() => {
      setShowTooltip(true);
    }, 7000);
  }

  function handleMouseLeave() {
    clearTimeout(tooltipTimeout.current);
    setShowTooltip(false);
  }

  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="nav_logo" />

      <div className="nav_center">
        <img src={products} alt="" />
        <span className="nav_link active">Produtos</span>
      </div>

      <div className="nav_actions">
        <div style={{ position: "relative", display: "inline-block" }}>
          <button
            className="new_product_button"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img src={plus} alt="" />
            <span>Novo produto</span>
          </button>
          <div
            className={"tooltip-novo-produto" + (showTooltip ? " visible" : "")}
          >
            Tá esperando o quê? Bora moeer!! 🚀
          </div>
        </div>
        <img src={profile} alt="Perfil" className="nav_profile" />
      </div>
    </nav>
  );
};

export default NavBar;
