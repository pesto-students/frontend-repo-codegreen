import React from 'react';
import styles from './Navbar.module.css'
import webLogo from '../../assets/images/logo with side text.svg';
import HamburgerMenu from './HamburgerMenu/HamburgerMenu'
import MenuItems from './MenuItems/MenuItems';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header>
      <NavLink to='/' className={styles.homeLink}>
      <img id={styles.logo} src={webLogo} alt="GreenGrow Logo" />
        </NavLink>
     
      <HamburgerMenu>
        <MenuItems />
         </HamburgerMenu> 
        <div id={styles.desktopMenu}>
          <MenuItems />
        </div>
    </header>
  )
}

export default Navbar;