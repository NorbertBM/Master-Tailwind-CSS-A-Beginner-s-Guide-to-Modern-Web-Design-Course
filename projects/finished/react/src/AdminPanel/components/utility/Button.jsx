import React from "react";

export default function Button({
  color = "blue",
  value = 500,
  onClick,
  variant = "default",
  cusClasses,
  children,
}) {
  const textColor = `text-${value >= 500 ? "white" : "black"}`;

  const baseStyle = `px-4 p-2 rounded-md font-semibold cursor-pointer transition-colors ${cusClasses}`;
  const variants = {
    default: `bg-${color}-${value.toString()} ${textColor} hover:bg-${color}-700 hover:text-white`,
    secondary: `bg-${color}-100 text-${color}-600 font-normal hover:bg-${color}-200`,
    outline: `border border-${color}-500 text-${color}-600 font-normal bg-transparent hover:bg-${color}-50`,
  };

  return (
    <button className={`${baseStyle} ${variants[variant]}`} onClick={onClick}>
      {children ? children : "Click me"}
    </button>
  );
}
