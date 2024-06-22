import React from "react";
import Button from "../../Button/Button";
import { NavLink } from "react-router-dom";
import { useUser } from "../../../store/UserContext";

function MenuItems() {
  const { user, signOut } = useUser();

  return (
    <nav className="w-full">
      <ul className="flex flex-col md:flex-row justify-end items-center gap-8 md:gap-6 list-none">
        {user && (
          <> 
          <li>
            <NavLink
              to="/discuss"
              className={({ isActive }) =>
                isActive ? "font-bold text-orange" : ""
              }
            >
              Discuss
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                isActive ? "font-bold text-orange" : ""
              }
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? "font-bold text-orange" : ""
              }
            >
             Dashboard
            </NavLink>
          </li>
       </>
        )}
       
        {user ?  (
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "font-bold text-orange" : ""
              }
            >
              <Button text="Log-out" bgColor="darkest-green" onClick={signOut} />
            </NavLink>
          </li>
        ) : (
          <li>
            <NavLink
              to="/sign-in"
              className={({ isActive }) =>
                isActive ? "font-bold text-orange" : ""
              }
            >
              <Button text="Login / Register" />
            </NavLink>
          </li>
        ) }
      </ul>
    </nav>
  );
}

export default MenuItems;

