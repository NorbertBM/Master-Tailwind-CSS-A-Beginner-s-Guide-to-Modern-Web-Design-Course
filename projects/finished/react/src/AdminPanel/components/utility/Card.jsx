import React from "react";

export default function Card({ children, title, text, icon }) {
  return (
    <div
      className={`bg-light dark:bg-dark dark:text-light p-6 rounded-lg shadow-lg animate-fade-in`}
    >
      <header
        className={`text-primary dark:text-secondary flex p-4 justify-center lg:justify-start mb-2`}
      >
        {icon}
      </header>
      {children ? (
        children
      ) : (
        <div className="p-4">
          <h4 className="text-lg font-semibold mb-2">
            {title ? title : "Card title"}
          </h4>
          <p className="text-2xl font-bold text-primary dark:text-secondary">
            {text ? text : "Card text gos here"}
          </p>
          {/* <button className={`text-${textColor}-600 text-sm font-medium`}>
            Read more...
          </button> */}
        </div>
      )}
    </div>
  );
}
