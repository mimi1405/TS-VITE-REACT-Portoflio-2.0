import React from "react";
import './Footer.css'

const Footer = () => {
  const getCurrentYear = (): number => {
    return new Date().getFullYear();
  };
  return (
    <>
      <footer id="footer">
          <p>Copyright <span id="rights">© {getCurrentYear()} | Maksim Momcilovic</span></p>
      </footer>
    </>
  );
};

export default Footer;
