import React, { useState, useEffect } from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { LuUser2 } from "react-icons/lu";
import { IoBagOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Clothing from "./hover-blocks/Clothing";
import Footwear from "./hover-blocks/Footwear";
import Grocery from "./hover-blocks/Grocery";
import Electronics from "./hover-blocks/Electronics";
import Stationary from "./hover-blocks/Stationary";
import Appliances from "./hover-blocks/Appliances";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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

  return (
    <>
      <div className="outer">
        <div className="inner">
          <div className="contain text-2xl">
            <div className="header-left">
              <MdOutlineLocationOn className="cursor-pointer icon" />
            </div>
            <div className="header-center">
              <img
                className="logo-temp cursor-pointer"
                src="temp_logo.png"
                alt="logo"
              />
            </div>
            <div className="header-right">
              {windowWidth > 425 ? (
                <>
                  <SearchBar />
                  <LuUser2 className="cursor-pointer icon" />
                  <IoBagOutline className="cursor-pointer icon" />
                </>
              ) : (
                <>
                  <LuUser2 className="cursor-pointer icon" />
                  <IoBagOutline className="cursor-pointer icon" />
                </>
              )}
            </div>

            {/* <div className="header-right">
              {windowWidth > 425 && <SearchBar />}
              <LuUser2 className="cursor-pointer icon" />
              <IoBagOutline className="cursor-pointer icon" />
            </div> */}
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

          <Electronics />

          <Stationary />

          <Appliances />

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
