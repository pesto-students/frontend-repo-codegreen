import React from "react";
import styles from "./Navbar.module.css";
import webLogo from "../../assets/images/logo with side text.svg";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";
import MenuItems from "./MenuItems/MenuItems";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="flex flex-row flex-wrap justify-between items-center bg-transparent border-b-2 border-darkest-green pb-[30px]">
      <NavLink to="/" className="w-[65%] md:w-[50%] ">
        <img
          id={styles.logo}
          src={webLogo}
          alt="GreenGrow Logo"
          className="max-w-[200px]"
        />
      </NavLink>

      <HamburgerMenu />

      <div
        id={styles.desktopMenu}
        className="hidden md:flex justify-center w-[50%]"
      >
        <MenuItems />
      </div>
    </header>
  );
}

export default Navbar;
