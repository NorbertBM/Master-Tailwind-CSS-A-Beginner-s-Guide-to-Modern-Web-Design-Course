import { useState } from "react";
import { FaCrown, FaSun, FaMoon, FaShoppingCart } from "react-icons/fa";
import Button from "./components/util/Button";
import Card from "./components/util/Card";
import Item from "./components/Item";
import Alert from "./components/util/Alert";
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
  const [cart, setCart] = useState([]);
  const [showAlert, setShowAlert] = useState({
    show: false,
    type: "",
  });

  // TODO: Create function to add product to cart

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

                showAlert: {
                  show: true,
                  type: "success",
                },
              }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1, total: product.price }];
      }
    });
    setShowAlert({
      show: true,
      type: "success",
    });
    setTimeout(() => {
      setShowAlert({ show: false, type: "" });
    }, 1500);
  };
  // TODO: Create function to remove product from cart

  const removeFromCart = (productId) => {
    const product = cart.find((item) => item.id === productId);
    if (
      product &&
      window.confirm(
        `Are you sure you want to remove ${product.name} from the cart`
      )
    ) {
      setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
      // Show alert danger
      setShowAlert({
        show: true,
        type: "danger",
      });
      setTimeout(() => {
        setShowAlert({ show: false, type: "" });
      }, 1500);
    }
  };
  // TODO: Create function to update product quantity in cart
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
    // Show Alert success
    setShowAlert({
      show: true,
      type: change >= 1 ? "success" : "danger",
    });
    setTimeout(() => {
      setShowAlert({ show: false, type: "" });
    }, 1500);
  };
  // TODO: Calculate Total Price in the Cart

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.total, 0).toFixed(2);
  };

  // TODO: Create function to handle checkout
  const handleCheckout = () => {
    if (confirm("Are you sure you want to checkout?")) {
      setCart([]);
      setShowAlert({
        show: true,
        type: "checkout",
      });
      setTimeout(() => {
        setShowAlert({ show: false, type: "" });
      }, 1500);
    }
  };
  // TODO: Create function to toggle dark mode

  const toggleDarkMode = () => {
    document.body.classList.toggle("dark");
    // document.body.classList.toggle("bg-gray-950");
    setDarkModeIcons(!darkModeIcons);
  };

  return (
    <div className="container mx-auto min-h-screen p-6">
      {/* // TODO: Create Header adn implement Button component */}
      <header className="relative text-center py-12 bg-blue-600 text-white rounded-lg shadow-md">
        <h1 className="flex justify-center gap-2 text-4xl font-bold">
          <FaCrown className="-rotate-45 -translate-y-5" /> Welcome to ShopKing
          <FaCrown className="rotate-45 -translate-y-5" />
        </h1>
        <p className="mt-2 text-lg">The best place to buy amazing products</p>
        <Button
          cusClasses={"absolute mt-4 top-1 right-5"}
          onClick={toggleDarkMode}
        >
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
                onClick={() => addToCart(product)}
                cusClasses={
                  "mt-2 w-full dark:bg-slate-900 dark:hover:bg-slate-800"
                }
              >
                Add to Cart
              </Button>
            </div>
          </Card>
        ))}
      </div>
      {/* TODO: Create the Shopping Cart component */}
      <div className="mt-10 p-6 bg-white rounded-lg shadow-md dark:bg-gray-700 dark:text-white">
        <header className="flex justify-between items-center">
          <h2 className="text-2xl font-bold flex gap-2 items-center mb-6">
            {" "}
            <FaShoppingCart />
            Shopping Cart ({cart.length})
          </h2>
          {(showAlert.show && showAlert.type === "success") ||
          showAlert.type === "checkout" ? (
            <Alert
              type={"info"}
              color={"green"}
              message={
                showAlert.type === "success"
                  ? "Product added to cart"
                  : "Thank you for shopping"
              }
            />
          ) : null}{" "}
          {showAlert.show && showAlert.type === "danger" ? (
            <Alert
              type={"info"}
              color={"red"}
              message={"Product removed from cart"}
            />
          ) : null}
        </header>
        <ul className="mt-4">
          {cart.map((item) => (
            <li
              key={item.id}
              className="border-b py-2 flex justify-between items-center"
            >
              {/* TODO: Create the Shopping Cart Item component */}

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
            <Button variant="outline" color="green" onClick={handleCheckout}>
              Checkout
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
