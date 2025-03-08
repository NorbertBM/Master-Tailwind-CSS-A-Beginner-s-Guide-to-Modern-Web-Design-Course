import React from "react";
// import { colorMap } from "../db/colorMap.js";
export default function Card({ bgColor, textColor, children, cardTitle }) {
  return (
    <div
      className={`rounded-lg overflow-hidden shadow-md  bg-white dark:bg-gray-700 dark:text-white 
      `}
    >
      <div className={`bg-${bgColor} h-24`}></div>
      {children ? (
        children
      ) : (
        <div className="p-4">
          <h4 className="font-bold mb-2">{!cardTitle && "Card Title"}</h4>
          <p className="text-sm opacity-80 mb-4">
            This is a simple card component styled with Tailwind CSS utility
            classes.
          </p>

          <button className={`text-${textColor} text-sm font-medium`}>
            Read more →
          </button>
        </div>
      )}
    </div>
  );
}
