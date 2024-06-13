import React from "react";

/**
 * Button component.
 *
 * @component
 * @param {string} text - The text to be displayed on the button.
 * @param {string} bgColor - The background color of the button. Example : 'orange'. Provide theme colors listed in tailwind.config.js file
 * @param {string} color - The text color of the button.
 * @param {string} icon - The URL of the icon to be displayed alongside the text.
 * @param {function} onClick - The function to be called when the button is clicked.
 * @param {string} className - Additional CSS class names for the button. These are also tailwind classes.
 * @returns {JSX.Element} The rendered Button component.
 */

function Button({
  text,
  bgColor = "orange",
  color = "white",
  icon,
  onClick,
  className,
  attributes
}) {
  return (
    <button
      className={`bg-${bgColor} text-${color} w-full py-4 px-5 font-bold rounded-2xl border-0 cursor-pointer flex justify-center items-center gap-10 mt-3 :hover-bg-darkest-green ${className}`}
      onClick={onClick}
      {...attributes}
    >
      {text} {icon && <img src={icon} alt="" />}
    </button>
  );
}

export default Button;
