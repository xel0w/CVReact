import React from "react";
import Navigation from "../components/Navigation";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Contact = () => {
  return (
    <div className="contact">
      <Navigation />
      <div className="contactContent">
        <div className="header"></div>
        <div className="contactBox">
          <h1>Contactez-moi</h1>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>Metz</span>
            </li>
            <li>
              <i className="fas fa-mobile-alt"></i>
              <CopyToClipboard text="0769997796">
                <span
                  className="clickInput"
                  onClick={() => {
                    alert("Téléphone copié!");
                  }}
                >
                  07 69 99 77 96
                </span>
              </CopyToClipboard>
            </li>
            <li>
              <i className="far fa-envelope"></i>
              <CopyToClipboard text="jordan.byrgiel@hotmail.fr">
                <span
                  className="clickInput"
                  onClick={() => {
                    alert("E-mail copié!");
                  }}
                >
                  jordan.byrgiel@hotmail.fr
                </span>
              </CopyToClipboard>
            </li>
          </ul>
        </div>
        <div className="socialNetwork">
          <ul>
            
              <a href="" target="_blank" rel="noopener noreferrer">
                <h4>LinkedIn</h4>
                <i className="fab fa-linkedin"></i>
              </a>
            
            
              <a href="" target="_blank" rel="noopener noreferrer">
                <h4>Github</h4>
                <i className="fab fa-github"></i>
              </a>
            
            
              <a href="" target="_blank" rel="noopener noreferrer">
                <h4>Twitter</h4>
                <i className="fab fa-twitter"></i>
              </a>
            
            
              <a href="" target="_blank" rel="noopener noreferrer">
                <h4>MonSite</h4>
                <i className="fas fa-laptop"></i>
              </a>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
