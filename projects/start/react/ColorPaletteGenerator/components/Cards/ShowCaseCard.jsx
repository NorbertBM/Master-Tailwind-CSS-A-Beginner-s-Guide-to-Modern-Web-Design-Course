import React from "react";
import { colorMap } from "../../db/colorMap";

export default function ShowCaseCard({ baseColor, darkMode }) {
  return (
    <div
      className={`rounded-lg overflow-hidden shadow-md ${
        darkMode ? "bg-gray-700" : "bg-white"
      }`}
    >
      <div className={`${colorMap.bg[baseColor]["500"]} h-24`}></div>
      <div className="p-4">
        <h4 className="font-bold mb-2">Card Title</h4>
        <p className="text-sm opacity-80 mb-4">
          This is a simple card component styled with Tailwind CSS utility
          classes.
        </p>
        <button
          className={`${colorMap.text[baseColor]["600"]} text-sm font-medium`}
        >
          Read more →
        </button>
      </div>
    </div>
  );
}
