import React, { useState } from "react";
import Button from "./components/ui/Button";
import Card from "./components/ui/card";
import { FaCrown, FaShoppingCart, FaMoon, FaSun } from "react-icons/fa";
import Alert from "./components/ui/Alert";
import Item from "./components/item";

const products = [
  { id: 1, name: "Product 1", price: 29.99 },
  { id: 2, name: "Product 2", price: 19.99 },
  { id: 3, name: "Product 3", price: 39.99 },
];

export default function ShoppingKing() {
  const [cart, setCart] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [darkModeIcons, setDarkModeIcons] = useState(false);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
                total: (item.quantity + 1) * item.price,
              }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1, total: product.price }];
      }
    });

    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 1500);
  };

  const removeFromCart = (productId) => {
    const product = cart.find((item) => item.id === productId);
    if (
      product &&
      window.confirm(
        `Are you sure you want to remove ${product.name} from the cart?`
      )
    ) {
      setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    }
  };

  const updateQuantity = (productId, change) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + change),
              total: Math.max(1, item.quantity + change) * item.price,
            }
          : item
      )
    );
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.total, 0).toFixed(2);
  };

  const randomColor = () => {
    const colors = ["400", "500", "600", "700", "800", "900"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  //  TODO: Create function to toggle dark mode
  const toggleDarkMode = () => {
    document.body.classList.toggle("dark");
    // toggle dark mode icons
    setDarkModeIcons(!darkModeIcons);
  };

  return (
    <div className="container mx-auto min-h-screen  p-6 ">
      <div className="relative text-center py-12 bg-blue-600 text-white rounded-lg shadow-md">
        <h1 className="flex justify-center gap-2 text-4xl font-bold">
          <FaCrown className="-rotate-45 -translate-y-5" />
          Welcome to ShopKing
          <FaCrown className="rotate-45 -translate-y-5" />
        </h1>
        <p className="mt-2 text-lg">The best place to buy amazing products</p>
        <Button
          bgColor={"blue-800"}
          onClick={toggleDarkMode}
          classes="mt-4 absolute top-1 right-5"
        >
          {darkModeIcons ? <FaSun /> : <FaMoon />}
        </Button>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card bgColor={`blue-${randomColor()}`} key={product.id}>
            <div className="p-4">
              <h4 className="font-bold mb-2">{product.name}</h4>
              <p className="text-sm opacity-80 mb-4">
                ${product.price.toFixed(2)}
              </p>
              <Button
                bgColor={"slate-600"}
                onClick={() => addToCart(product)}
                classes="mt-2 w-full dark:bg-slate-900 dark:hover:bg-slate-800"
              >
                Add to Cart
              </Button>
            </div>
          </Card>
        ))}
      </div>
      {/* TODO: Create the Shopping cart */}
      <div className="mt-10 p-6 bg-white rounded-lg shadow-md dark:bg-gray-700 dark:text-white">
        <header className="flex justify-between items-center">
          <h2 className="text-2xl font-bold flex items-center mb-6">
            <FaShoppingCart className="mr-2" /> Shopping Cart ({cart.length})
          </h2>
          {showAlert && (
            <Alert
              type="alert"
              bgColor="green-100"
              textColor="slate-800"
              message={`Product added to cart`}
            />
          )}
        </header>

        <ul className="mt-4">
          {cart.map((item) => (
            <li
              key={item.id}
              className="border-b py-2 flex justify-between items-center"
            >
              <Item
                item={item}
                updateQuantity={updateQuantity}
                removeFromCart={removeFromCart}
              />
            </li>
          ))}
        </ul>
        {cart.length > 0 && (
          <div className="mt-4 flex justify-between items-center">
            <span className="text-xl font-bold">
              Total: ${calculateTotalPrice()}
            </span>
            <Button bgColor={"blue-600"}>Checkout</Button>
          </div>
        )}
      </div>
    </div>
  );
}
