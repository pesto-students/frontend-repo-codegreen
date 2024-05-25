import React from 'react'
import hamburgerIcon from '../../../assets/icons/hamburger.svg'
import styles from './HamburgerMenu.module.css';

function HamburgerMenu() {
  return (
    <div id={styles.hamburger}>
        <img src={hamburgerIcon} alt="Navigation Menu" />
    </div>
  )
}

export default HamburgerMenu