import React, { useState } from "react";
import Button from "../utility/Button";
export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMode(!darkMode);
  };

  return (
    <nav className="w-full bg-light dark:bg-dark p-4 flex justify-around md:justify-between shadow">
      <h2 className="text-xl font-semibold text-dark dark:text-light">
        Admin Panel
      </h2>
      <Button onClick={toggleDarkMode} cusClasses={"bg-primary"}>
        {darkMode ? "☀️ Light Mode " : "🌙 Dark Mode"}
      </Button>
    </nav>
  );
}
