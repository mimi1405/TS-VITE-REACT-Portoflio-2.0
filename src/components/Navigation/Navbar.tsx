import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

interface NavbarProps {
  isMobile: boolean;
  closeMobileMenu: VoidFunction;
}

const freezeScrolling = () => {
  const body = document.body;
  body.style.overflow = 'hidden';
};


const Navbar: React.FC<NavbarProps> = ({ isMobile, closeMobileMenu }) => {
  const animate = () => {
    freezeScrolling();
    for (const link of document.querySelectorAll<HTMLLinkElement>(".link")) {
      link.onmousemove = (e: MouseEvent) => {
        const decimal = e.clientX / link.offsetWidth;
        const basePercent = 80;
        const percentRange = 20;
        const adjustablePercent = percentRange * decimal;
        const lightRedPercent = basePercent + adjustablePercent;
        link.style.setProperty("--light-red-percent", `${lightRedPercent}%`);
      };
    }
  };

  useEffect(() => {
    animate();
  }, []);

  return (
    <>
      <div className="container">
        <Link
          to="/"
          onClick={() => isMobile && closeMobileMenu()}
          className="link"
        >
          <p>ABOUT ME</p>
        </Link>
        <Link
          to="/projects"
          onClick={() => isMobile && closeMobileMenu()}
          className="link"
        >
          <p>PROJECTS</p>
        </Link>
        <Link
          to="expertise"
          onClick={() => isMobile && closeMobileMenu()}
          className="link"
        >
          <p>EXPERTISE.</p>
        </Link>
        <Link
          to="contact"
          onClick={() => isMobile && closeMobileMenu()}
          className="link"
        >
          <p>Say Hi!</p>
        </Link>
      </div>
    </>
  );
};

export default Navbar;