/* Imports necessary modules and assets, including React, useState, useEffect, 
Link from react-router-dom, and various images and data sources.*/

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close, logotest } from "../assets";

/* Manages the state for various aspects of the navbar, such as the active link, 
toggling the mobile menu, and whether the user has scrolled down the page. */

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /*  The useEffect hook is used to add and remove a scroll event listener. 
When the user scrolls, the handleScroll function checks the window's vertical 
scroll position (scrollY) and updates the scrolled state based on whether the 
user has scrolled beyond a certain threshold. */

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* The component's return block contains the structure of the navigation bar. 
It's divided into two parts: one for larger screens and one for smaller screens (mobile view). */

  return (
    /* The navbar's outer container uses the styles.paddingX class for horizontal padding, 
and its appearance depends on whether the user has scrolled (scrolled state). It includes 
the site logo, name, and a list of navigation links.

The list of navigation links is generated using the navLinks array. Each link is rendered as an <li> 
element with appropriate styling. The active link's style depends on the active state. */

    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logotest} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            Adam &nbsp;
            <span className="sm:block hidden"> | arosso.co.uk</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`font-poppins font-medium cursor-pointer text-[16px] ${
                active === nav.title ? "text-white" : "text-secondary"
              }`}
              onClick={() => {
                setToggle(!toggle);
                setActive(nav.title);
              }}
            >
              {nav.id === "about" ||
              nav.id === "work" ||
              nav.id === "contact" ? (
                <a href={`#${nav.id}`} target={nav.target} rel={nav.rel}>
                  {nav.title}
                </a>
              ) : (
                <a href={nav.url} target={nav.target} rel={nav.rel}>
                  {nav.title} <i className="fas fa-external-link-alt"></i>
                </a>
              )}
            </li>
          ))}
        </ul>

        {/*     For smaller screens, a collapsible menu icon (menu or close icon) is displayed on the right side. 
        When clicked, it toggles the toggle state to show or hide the mobile menu.
        The mobile menu (<div>) appears as a dropdown, and it contains a list of navigation links similar 
        to the desktop version. Clicking on a link also toggles the toggle state and updates the active link. */}

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={nav.url} target={nav.target} rel={nav.rel}>
                    {nav.title}
                    {nav.target === "_blank" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 inline ml-1 mb-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M17,0H3C1.897,0,1.005,0.897,1.005,2L1,18c0,1.103,0.892,2,1.995,2H17c1.103,0,2-0.897,2-2V2 C19,0.897,18.103,0,17,0z M8.293,16.707c-0.391,0.391-1.023,0.391-1.414,0L4.586,14H2V2h16v12h-4.586l-2.293,2.293 C9.316,16.902,8.684,16.902,8.293,16.707z M14,8h-3V5h-2v3H6v2h3v3h2v-3h3V8z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
