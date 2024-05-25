import React from 'react'
import styles from './MenuItems.module.css';
import Button from '../../Button/Button';
import {NavLink} from 'react-router-dom';

function MenuItems() {
  return (
    <nav id={styles.menu}>
        <ul>
          <li><NavLink to='/discuss'>
              Discuss
            </NavLink></li>
          <li><NavLink to='/shop'>
              Shop
            </NavLink></li>
          <li>
            <NavLink to='/sign-in'>
            <Button text='Login / Register'/>

            </NavLink>
          </li>
        </ul>
      </nav>
  )
}

export default MenuItems