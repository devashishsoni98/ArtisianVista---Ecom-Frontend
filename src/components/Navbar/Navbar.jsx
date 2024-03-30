import React, { useState, useEffect } from "react";
import { TbCameraSearch } from "react-icons/tb";
import Ripples from "react-ripples";
import { IoCloseSharp } from "react-icons/io5";
import { MdOutlineLocationOn } from "react-icons/md";
import { LuUser2 } from "react-icons/lu";
import { IoBagOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Clothing from "./hover-blocks/Clothing";
import Footwear from "./hover-blocks/Footwear";
import Grocery from "./hover-blocks/Grocery";
import Electronics from "./hover-blocks/Electronics";
import Stationary from "./hover-blocks/Stationary";
import Appliances from "./hover-blocks/Cosmetics";
import SearchBar from "./SearchBar";
import Cosmetics from "./hover-blocks/Cosmetics";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const closeMenu = () => {
    setIsActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSearchClick = () => {
    if (windowWidth < 430) {
      setIsSearchOpen(!isSearchOpen);
    }
  };

  const handleBagClick = () => {
    setIsSearchOpen(false);
  };

  return (
    <>
      <div className="outer">
        <div className="inner">
          <div className="contain text-2xl">
            <div
              className={`header-left ${
                isSearchOpen ? "header-left-active" : ""
              }`}
            >
              <img
                className="logo-temp cursor-pointer"
                src="logo_final1.png"
                alt="logo"
              />
            </div>
            {/* <div className="header-center">
            </div> */}
            <div className="header-right">
              <SearchBar isOpen={isSearchOpen} onToggle={handleSearchClick} />
              {windowWidth < 430 && isSearchOpen && (
                <IoCloseSharp
                  className="cursor-pointer icon"
                  onClick={handleBagClick}
                />
              )}
              <Ripples className="ripples">
                <TbCameraSearch className="cursor-pointer icon" />
              </Ripples>
              <Ripples className="ripples">
              <LuUser2 className="cursor-pointer icon" />
              </Ripples>
              <Ripples className="ripples">
              <IoBagOutline
                className="cursor-pointer icon"
                onClick={handleBagClick}
                />
              </Ripples>
            </div>
          </div>
        </div>
      </div>
      <nav className="nav-container">
        <ul className={`ul-container ${isActive ? "active" : ""}`}>
          <li className="list" onClick={closeMenu}>
            <Link to="/" className="link">
              Home
            </Link>
          </li>

          <Clothing />

          <Footwear />

          <Grocery />

          <Stationary />

          <Cosmetics />

          <Electronics />

          <li className="list" onClick={closeMenu}>
            <Link to="/about" className="link">
              About
            </Link>
          </li>

          <li className="list" onClick={closeMenu}>
            <Link to="/contact" className="link">
              Contact
            </Link>
          </li>
        </ul>
        <div
          className={`hamburger ${isActive ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
