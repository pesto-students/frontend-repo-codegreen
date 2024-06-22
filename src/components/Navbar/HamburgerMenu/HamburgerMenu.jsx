import React from 'react'
import hamburgerIcon from '../../../assets/icons/hamburger.svg'
import styles from './HamburgerMenu.module.css';
import MenuItems from '../MenuItems/MenuItems';

function HamburgerMenu() {

  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
    <div className='md:hidden w-[35%] text-right flex justify-end'>
        <img src={hamburgerIcon} alt="Navigation Menu" className='cursor-pointer w-[30px] ' onClick={() => setIsOpen(!isOpen)}/>
    </div>
    {
      isOpen && (
        <div class="w-full block md:w-auto md:hidden border-2 border-darkest-green rounded-lg bg-light-green p-4 mt-2 text-base" id="navbar-dropdown">
        {/* <ul class="flex flex-col font-medium p-4 border-2 border-darkest-green rounded-lg bg-light-green rtl:space-x-reverse">
          <li>
            <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded" aria-current="page">Home</a>
          </li> */}
         <MenuItems />
       
      </div>
      )
    }
    </>
  )
}

export default HamburgerMenu