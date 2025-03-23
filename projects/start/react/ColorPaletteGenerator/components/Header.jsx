export default function Header({
  colors,
  darkMode,
  setDarkMode,
  baseColor,
  setBaseColor,
}) {
  return (
    <header className="p-6 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold">
          Tailwind CSS Color Palette Explorer
        </h1>

        <div className="flex items-center gap-4">
          <div className="flex items-center space-x-2">
            <label htmlFor="color-select" className="font-medium">
              Base Color:
            </label>
            <select
              id="color-select"
              value={baseColor}
              onChange={(e) => setBaseColor(e.target.value)}
              className="px-3 py-2 border rounded-md bg-slate-950 text-white dark:bg-gray-800 border-gray-300 dark:border-gray-600"
            >
              {colors.map((color) => (
                <option key={color} value={color}>
                  {color.charAt(0).toUpperCase() + color.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center space-x-2">
            <label htmlFor="theme-toggle" className="font-medium">
              Dark Mode:
            </label>
            <div
              onClick={() => setDarkMode(!darkMode)}
              className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer ${
                darkMode ? "bg-blue-600" : "bg-gray-300"
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                  darkMode ? "translate-x-6" : ""
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
