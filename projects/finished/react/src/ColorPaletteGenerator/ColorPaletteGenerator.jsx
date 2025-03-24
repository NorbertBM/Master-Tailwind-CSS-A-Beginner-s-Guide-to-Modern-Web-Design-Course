import React, { useState } from "react";
import Header from "./components/Header";

import { colorMap } from "./db/colorMap";
import {
  PrimeBtnShow,
  SecBtnShow,
  OutlineBtnShow,
} from "./components/buttons/Buttons";

import ShowCaseCard from "./components/Cards/ShowCaseCard";
import ShowCaseAlert from "./components/Alerts/ShowCaseAlert";

const ColorPaletteGenerator = () => {
  const [baseColor, setBaseColor] = useState("blue");
  const [darkMode, setDarkMode] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  // Tailwind's default color shades
  const shades = [
    "50",
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ];

  // Available Tailwind colors
  const colors = [
    "slate",
    "gray",
    "zinc",
    "neutral",
    "stone",
    "red",
    "orange",
    "amber",
    "yellow",
    "lime",
    "green",
    "emerald",
    "teal",
    "cyan",
    "sky",
    "blue",
    "indigo",
    "violet",
    "purple",
    "fuchsia",
    "pink",
    "rose",
  ];

  // Get contrasting text color
  const getTextColor = (shade) => {
    const shadeNum = parseInt(shade);
    return shadeNum > 500 ? "text-white" : "text-black";
  };

  // Copy color class to clipboard
  const copyToClipboard = (colorClass) => {
    navigator.clipboard.writeText(colorClass);
    setSelectedColor(colorClass);
    setTimeout(() => setSelectedColor(null), 1500);
  };

  // Pre-defined color classes to ensure Tailwind includes them in the build

  return (
    <div
      className={`min-h-screen w-full flex flex-col ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* TODO:  Header component */}

      <Header
        colors={colors}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        baseColor={baseColor}
        setBaseColor={setBaseColor}
      />
      <main className="flex-1 p-6">
        <div className="max-w-6xl mx-auto">
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Color Palette</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
              {shades.map((shade) => {
                const bgColorClass = colorMap.bg[baseColor][shade];
                const textColorClass = getTextColor(shade);
                const colorLabel = `${baseColor}-${shade}`;
                return (
                  <div
                    key={shade}
                    className={`${bgColorClass} p-6 rounded-lg shadow-md cursor-pointer transition-transform hover:scale-105`}
                    onClick={() =>
                      copyToClipboard(bgColorClass.replace("bg-", ""))
                    }
                  >
                    <div className={`flex flex-col gap-1 ${textColorClass}`}>
                      <span className="font-bold">{colorLabel}</span>
                      <span className="text-sm opacity-80">
                        {selectedColor === bgColorClass
                          ? "Copied!"
                          : "Click to copy"}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">
              Example UI Components
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Button Showcase */}
              <div
                className={`p-6 rounded-lg ${
                  darkMode ? "bg-gray-800" : "bg-gray-100"
                }`}
              >
                <h3 className="text-lg font-medium mb-4">
                  Buttons{" "}
                  <small className="text-xs text-slate-500">Showcase</small>
                </h3>
                <div className="flex flex-col gap-3">
                  {/* TODO: Create  */}

                  <PrimeBtnShow baseColor={baseColor} colorMap={colorMap} />
                  {/* TODO: Secondary button */}

                  <SecBtnShow baseColor={baseColor} colorMap={colorMap} />

                  {/* TODO: Create Outline  Showcase Button  */}

                  <OutlineBtnShow baseColor={baseColor} colorMap={colorMap} />
                </div>

                <h3 className="text-lg font-medium my-4">
                  Button{" "}
                  <small className="text-xs text-slate-500">
                    component example
                  </small>
                </h3>
                {/* TODO: CREATE YOU OWN BUTTON COMPONENT */}
              </div>

              {/* Card Showcase */}
              <div
                className={`p-6 rounded-lg ${
                  darkMode ? "bg-gray-800" : "bg-gray-100"
                }`}
              >
                <h3 className="text-lg font-medium mb-4">Card</h3>

                <ShowCaseCard baseColor={baseColor} darkMode={darkMode} />
                <h3 className="text-lg font-medium my-4">
                  Card{" "}
                  <small className="text-xs text-slate-500">
                    component example
                  </small>
                </h3>
                {/* TODO: Create your own Card Component */}
              </div>

              {/* Alert Showcase */}
              <div
                className={`p-6 rounded-lg ${
                  darkMode ? "bg-gray-800" : "bg-gray-100"
                }`}
              >
                <h3 className="text-lg font-medium mb-4">Alerts</h3>
                <div className="flex flex-col gap-3">
                  <ShowCaseAlert baseColor={baseColor} />
                  <h3 className="text-lg font-medium mb-4">
                    Alert{" "}
                    <small className="text-xs text-slate-500">
                      component example
                    </small>
                  </h3>
                  {/* TODO: Create you own alert Component */}
                </div>
              </div>
            </div>
          </section>
          {/* TODO: Description */}
          <section>
            <h2 className="text-xl font-semibold mb-4">
              Tailwind CSS Features
            </h2>
            <div
              className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              <div className="space-y-2">
                <h3 className="font-bold">Utility-First Approach</h3>
                <p className="text-sm">
                  Build complex components from a constrained set of primitive
                  utilities
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold">Responsive Design</h3>
                <p className="text-sm">
                  Create responsive layouts using intuitive breakpoint prefixes
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold">Hover, Focus, & Other States</h3>
                <p className="text-sm">
                  Style elements on hover, focus, and more with simple state
                  variants
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold">Dark Mode</h3>
                <p className="text-sm">
                  Add dark mode support to your project with the dark variant
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer
        className={`p-6 border-t ${
          darkMode ? "border-gray-700" : "border-gray-200"
        }`}
      >
        <div className="max-w-6xl mx-auto text-center text-sm opacity-75">
          <p>Built with React and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
};

export default ColorPaletteGenerator;
