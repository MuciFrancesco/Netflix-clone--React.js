import React from "react";
import footerImg from "../assets/footer-img.png";

function Footer() {
  return (
    <div className="home-footer">
      <img src={footerImg} alt="footer-img" />
      <div className="footer-info">
        <h1>Clone Netflix</h1>
        <h4>Realizzato da:</h4>
        <p>Muci Francesco</p>
        <h4>Contatti:</h4>
        <div className="footer-contact">
          <a
            href="mailto:francesco.muci@hotmail.it"
            target="_blank"
            rel="noreferrer"
          >
            Inviami un Email
          </a>
          <a
            href="https://www.linkedin.com/in/francesco-muci-97a38222a/"
            target="_blank"
            rel="noreferrer"
          >
            Visita il mio Linkedin
          </a>
          <a
            href="https://github.com/MuciFrancesco"
            target="_blank"
            rel="noreferrer"
          >
            Guarda i miei progetti su GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
