import React from "react";

export default function Button({ bgColor, children, onClick, classes }) {
  return (
    <button
      className={`bg-${bgColor} hover:bg-${bgColor.replace(
        /\d+/,
        (match) => parseInt(match) + 100
      )} ${
        parseInt(bgColor.match(/\d+/)[0]) <= 500 ? "text-black" : "text-white"
      } py-2 px-4 rounded-md transition-colors font-semibold   ${classes}`}
      onClick={onClick}
    >
      {children ? children : "Primary Button"}
    </button>
  );
}
