import { useState } from "react";
import { FaCrown, FaSun, FaMoon } from "react-icons/fa";
import Button from "./components/util/Button";
import Card from "./components/util/Card";
// Util comp
// Comp

// Data base
const products = [
  {
    id: 1,
    name: "Product 1",
    description: "This is product 1, this product is awesome!",
    price: 29.99,
    color: "sky-500",
  },
  {
    id: 2,
    name: "Product 2",
    description: "This is product 2, this product contains multiple benefits",
    price: 19.99,
    color: "lime-500",
  },
  {
    id: 3,
    name: "Product 3",
    description: "This is product 3, there is no other product like this.",
    price: 39.99,
    color: "pink-500",
  },
];

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
      {/* // TODO: Create Header adn implement Button component */}
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
      {/* //TODO: Create Products and implement Card component */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {products.map((product) => (
          <Card bgColor={product.color} key={product.id}>
            <div className="p-4">
              <h4 className="font-bold mb-2">{product.name}</h4>
              <p className="text-sm opacity-80 mb-4">
                {product.description}
              </p>{" "}
              <p className="text-sm opacity-80 mb-4">
                ${product.price.toFixed(2)}
              </p>
              <Button
                color="slate"
                onClick={() => alert("product added to cart")}
              >
                Add to Cart
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
