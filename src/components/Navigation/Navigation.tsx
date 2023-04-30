import React from "react";
import { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt3, HiOutlineMenuAlt2 } from "react-icons/hi";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./Navigation.css";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  const unfreezeScrolling = () => {
    const body = document.body;
    body.style.overflow = "";
  };

  const hamburgerIconEntry = (
    <HiOutlineMenuAlt3
      size="40px"
      color="white"
      onClick={() => setOpen(!open)}
      onMouseEnter={() => setHovered(true)}
      className="hamburger"
    />
  );

  const hamburgerIconLeave = (
    <HiOutlineMenuAlt2
      size="60px"
      onClick={() => setOpen(!open)}
      onMouseLeave={() => setHovered(false)}
      className="hamburger-leave"
    />
  );

  const renderBurger = () => {
    return hovered ? hamburgerIconLeave : hamburgerIconEntry;
  };

  /* const closeIcon = (
    <AiOutlineClose
      size="40px"
      color="white"
      onClick={() => unfreezeScrolling()}
      className="close"
    />
  ); */

  const closeIcon = (
    <button
      className="button-three"
      aria-controls="primary-navigation"
      aria-expanded="false"
    >
      <svg
        stroke="var(--button-color)"
        fill="none"
        className="hamburger"
        viewBox="-10 -10 120 120"
        width="250"
      >
        <path
          className="line"
          stroke-width="10"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70"
        ></path>
      </svg>
    </button>
  );

  useEffect(() => {
    setHovered(true);
    const button = document.querySelector<HTMLButtonElement>("button");

    button?.addEventListener("click", () => {
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
    });
  }, [hovered]);

  const closeMobileMenu = () => {
    const button = document.querySelector<HTMLButtonElement>("button");
    button?.setAttribute("data-state", "closed");
    button?.setAttribute("aria-expanded", "false");
    setOpen(false);
    unfreezeScrolling();
  };

  function close() {
    if (open === true) {
      setOpen(!open);
    } else {
      null;
    }
  }

  return (
    <>
      <div className="navigation">
        {/* <div className="symbols">
          <Link to="/" onClick={() => close()}></Link>
          {open ? closeIcon : renderBurger()}
        </div>
        {open && <Navbar isMobile={true} closeMobileMenu={closeMobileMenu} />} */}
        <button
          className="button-three"
          aria-controls="primary-navigation"
          aria-expanded="false"
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
