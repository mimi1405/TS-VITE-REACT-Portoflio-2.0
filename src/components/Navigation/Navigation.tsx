import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";
import "./Navigation.css";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const unfreezeScrolling = () => {
    const body = document.body;
    body.style.overflow = "";
  };

  useEffect(() => {
    setHovered(true);
    const button = buttonRef.current;
  
    function handleClick() {
      const currentState = button?.getAttribute("data-state");
  
      if (!currentState || currentState === "closed") {
        button?.setAttribute("data-state", "opened");
        button?.setAttribute("aria-expanded", "true");
        setOpen(true);
      } else {
        button?.setAttribute("data-state", "closed");
        button?.setAttribute("aria-expanded", "false");
        setOpen(false);
        unfreezeScrolling();
      }
    }
  
    button?.addEventListener("click", handleClick);
  
    return () => {
      button?.removeEventListener("click", handleClick);
    };
  }, [hovered]);
  

  const closeMobileMenu = () => {
    const button = buttonRef.current;
    button?.setAttribute("data-state", "closed");
    button?.setAttribute("aria-expanded", "false");
    setOpen(false);
    unfreezeScrolling();
  };

  return (
    <>
      <div className="navigation">
        <button
          className="button-three"
          aria-controls="primary-navigation"
          aria-expanded="false"
          ref={buttonRef}
        >
          <svg
            stroke="var(--button-color)"
            fill="none"
            className="hamburger"
            viewBox="-10 -10 120 120"
            width="70"
          >
            <path
              className="line"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70"
            />
          </svg>
        </button>
      </div>
      {open && <Navbar isMobile={true} closeMobileMenu={closeMobileMenu} />}
    </>
  );
};

export default Navigation;