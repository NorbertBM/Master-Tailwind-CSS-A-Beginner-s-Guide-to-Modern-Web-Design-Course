import React from "react";

export default function Card({
  bgColor = "blue-500",
  textColor,
  darkMode,
  children,
  cardTitle,
  cardText,
}) {
  return (
    <div
      className={`rounded-lg overflow-hidden shadow-md ${
        darkMode !== undefined && darkMode ? "bg-gray-700" : "bg-white"
      } dark:bg-gray-700 dark:text-white`}
    >
      <header className={`bg-${bgColor} min-h-24`}></header>
      {children ? (
        children
      ) : (
        <div className="p-4">
          <h4 className="font-bold mb-2">
            {cardTitle ? cardTitle : "Card title"}
          </h4>
          <p className="text-sm opacity-80 mb-4">
            {cardText ? cardText : "Card text gos here"}
          </p>
          <button className={`text-${textColor}-600 text-sm font-medium`}>
            Read more...
          </button>
        </div>
      )}
    </div>
  );
}
