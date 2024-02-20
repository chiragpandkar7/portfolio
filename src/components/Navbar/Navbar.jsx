import React, { useState } from "react";
import "./Navbar.modules.css";
import { getImageURL } from "../../utils.js";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <a className="titleNav" href="/">
        Portfolio
      </a>
      <div className="menu">
        <img
          className="menuBtn"
          src={
            menuOpen
              ? getImageURL("nav/closeIcon.png")
              : getImageURL("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`menuItems ${menuOpen ? 'menuOpen' : ' ' }`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};