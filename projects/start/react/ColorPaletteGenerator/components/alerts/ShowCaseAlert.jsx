import React from "react";
import { colorMap } from "../../db/colorMap";
export default function ShowCaseAlert({ baseColor }) {
  return (
    <>
      <div
        className={`${colorMap.bg[baseColor]["100"]} border-l-4 ${colorMap.border[baseColor]["500"]} ${colorMap.text[baseColor]["700"]} p-4 rounded`}
      >
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
          <p className="font-medium">Information alert</p>
        </div>
      </div>
      <div
        className={`${colorMap.bg[baseColor]["50"]} border ${colorMap.border[baseColor]["300"]} ${colorMap.text[baseColor]["800"]} p-4 rounded-md`}
      >
        <p>Simple bordered alert</p>
      </div>
    </>
  );
}
