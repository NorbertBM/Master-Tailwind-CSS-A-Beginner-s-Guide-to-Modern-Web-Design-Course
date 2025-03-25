import { useState } from "react";
import { FaCrown, FaSun, FaMoon } from "react-icons/fa";
import Button from "./components/util/Button";

// Util comp
// Comp

// Data base

export default function ShopKing() {
  // States
  const [darkModeIcons, setDarkModeIcons] = useState(false);

  // TODO: Create function to add product to cart
  // TODO: Create function to remove product from cart
  // TODO: Create function to update product quantity in cart
  // TODO: Create function to handle checkout
  // TODO: Create function to toggle dark mode
  return (
    <div className="container mx-auto min-h-screen p-6">
      <header className="relative text-center py-12 bg-blue-600 text-white rounded-lg shadow-md">
        <h1 className="flex justify-center gap-2 text-4xl font-bold">
          <FaCrown className="-rotate-45 -translate-y-5" /> Welcome to ShopKing
          <FaCrown className="rotate-45 -translate-y-5" />
        </h1>
        <p className="mt-2 text-lg">The best place to buy amazing products</p>
        <Button cusClasses={"absolute mt-4 top-1 right-5"}>
          {darkModeIcons ? <FaSun /> : <FaMoon />}
        </Button>
      </header>
    </div>
  );
}
