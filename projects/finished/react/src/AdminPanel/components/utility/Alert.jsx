import React from "react";

export default function Alert({ type, color, message }) {
  return (
    <div
      className={`bg-secondary dark:bg-primary ${
        type === "info" ? "border-l-4" : "border"
      } border-dark  dark:border-light text-dark dark:text-light p-4 rounded`}
    >
      {type === "info" ? (
        <div className="flex items-center">
          <svg
            className="w-5 h-5 mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            />
          </svg>

          <p className="font-medium">
            {message ? message : "Information alert"}
          </p>
        </div>
      ) : (
        <p>{message ? message : "Simple alert"}</p>
      )}
    </div>
  );
}
