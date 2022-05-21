import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="sidebar">
      <div className="id">
        <div className="idContent">
          <img src="./media/jordanPhot.jpg" alt="profil" />
          <h3>Jordan BYRGIEL</h3>
        </div>
      </div>
      <div className="navigation">
        <ul>
          <li>
            <NavLink className={(navData) => navData.isActive ? "navActive" : ""} exact to="/">
              <i className="fas fa-home"></i>
              <span>Accueil</span>
            </NavLink>
          </li>
          <li>
            <NavLink className={(navData) => navData.isActive ? "navActive" : ""} exact to="/competences">
              <i className="fas fa-mountain"></i>
              <span>Compétences</span>
            </NavLink>
          </li>
          <li>
            <NavLink className={(navData) => navData.isActive ? "navActive" : ""} exact to="/portfolio">
              <i className="fas fa-images"></i>
              <span>Portfolio</span>
            </NavLink>
          </li>
          <li>
            <NavLink className={(navData) => navData.isActive ? "navActive" : ""} exact to="/contact">
              <i className="fas fa-address-book"></i>
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="socialNetwork">
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/jordan-byrgiel-640848221/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/xel0w" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/xel0w" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://xelow.fr" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-desktop"></i>
            </a>
          </li>
        </ul>
        <div className="signature">
          <p>Xel0w - 2022</p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
