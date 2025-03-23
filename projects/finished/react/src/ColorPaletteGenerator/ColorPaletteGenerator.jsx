import React, { useState } from "react";
import Header from "./components/Header";
import { colorMap } from "./db/colorMap";
import {
  PrimeBtnShow,
  PrimeBtn,
  SecBtnShow,
  OutlineBtnShow,
  SecBtn,
  OutlineBtn,
  Button,
} from "./components/buttons/PrimeBtn";
import Alert from "./components/alerts/Alert";
import Card from "./components/Card";

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
      {/* TODO: Create Header component */}

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
                {/* TODO: Create component */}
                <h3 className="text-lg font-medium mb-4">
                  Button{" "}
                  <small className="text-xs text-slate-500">
                    component example
                  </small>
                </h3>
                <PrimeBtn bgColor={"bg-lime-100"} />
                <SecBtn bgColor={"bg-red-100"} textColor={"text-red-400"} />
                <OutlineBtn
                  bgColor={"bg-red-300"}
                  textColor={"text-red-500"}
                  borderColor={"border-red-300"}
                />
                <Button bgColor={"blue-700"} onClick={() => alert("Click")} />
              </div>

              {/* Card Showcase */}
              <div
                className={`p-6 rounded-lg ${
                  darkMode ? "bg-gray-800" : "bg-gray-100"
                }`}
              >
                <h3 className="text-lg font-medium mb-4">Card</h3>
                <div
                  className={`rounded-lg overflow-hidden shadow-md ${
                    darkMode ? "bg-gray-700" : "bg-white"
                  }`}
                >
                  <div
                    className={`${colorMap.bg[baseColor]["500"]} h-24`}
                  ></div>
                  <div className="p-4">
                    <h4 className="font-bold mb-2">Card Title</h4>
                    <p className="text-sm opacity-80 mb-4">
                      This is a simple card component styled with Tailwind CSS
                      utility classes.
                    </p>
                    <button
                      className={`${colorMap.text[baseColor]["600"]} text-sm font-medium`}
                    >
                      Read more →
                    </button>
                  </div>
                </div>
                <h3 className="text-lg font-medium mb-4">
                  Button{" "}
                  <small className="text-xs text-slate-500">
                    component example
                  </small>
                </h3>
                <Card
                  bgColor={"blue-400"}
                  textColor={"blue-700"}
                  darkMode={darkMode}
                />
              </div>

              {/* Alert Showcase */}
              <div
                className={`p-6 rounded-lg ${
                  darkMode ? "bg-gray-800" : "bg-gray-100"
                }`}
              >
                <h3 className="text-lg font-medium mb-4">Alerts</h3>
                <div className="flex flex-col gap-3">
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
                  <h3 className="text-lg font-medium mb-4">
                    Alert{" "}
                    <small className="text-xs text-slate-500">
                      component example
                    </small>
                  </h3>
                  <Alert
                    type="alert"
                    message="My alert"
                    bgColor={"violet-100"}
                    textColor={"violet-700"}
                  />
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
