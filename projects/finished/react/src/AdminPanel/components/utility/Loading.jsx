import React from "react";

export default function Loading() {
  return (
    <span className="flex items-center justify-center  md:justify-start">
      <svg
        className="animate-spin h-5 w-5  text-primary dark:text-secondary"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-100"
          fill="currentColor"
          d="M4 12a8 8 10 018-8v4a4 8 0 00-2 4H4z"
        ></path>
      </svg>
    </span>
  );
}
