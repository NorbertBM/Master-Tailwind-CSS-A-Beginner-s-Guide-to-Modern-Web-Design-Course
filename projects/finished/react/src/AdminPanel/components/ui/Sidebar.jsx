import React, { useState } from "react";
import Button from "../utility/Button";
import { FaWindowClose } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import Alert from "../utility/Alert";
export default function Sidebar({ handleOpenHome, handleOpenAnalytics }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showAlert, setShowAlert] = useState({
    show: false,
    type: "",
  });

  const accessibility = () => {
    setShowAlert({
      show: true,
      type: "info",
    });

    setTimeout(() => {
      setShowAlert({
        show: false,
        type: "",
      });
    }, 1500);
  };
  return (
    <>
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          cusClasses={"bg-primary fixed top-4 left-4 z-100 md:hidden "}
        >
          <FiMenu size={24} />
        </Button>
      )}
      <aside
        className={`fixed md:relative w-64 h-screen bg-primary dark:bg-dark text-white p-4 transform transition-all duration-300 z-50 ${
          isOpen || window.innerWidth >= 768
            ? "translate-x-0"
            : "-translate-x-full"
        } md:translate-x-0`}
      >
        {isOpen && (
          <Button
            onClick={() => setIsOpen(false)}
            cusClasses={"bg-secondary  md:hidden"}
          >
            <FaWindowClose />
          </Button>
        )}
        <ul className="mt-6 space-y-4">
          <div
            className="hover:bg-dark dark:hover:bg-secondary dark:hover:text-dark p-2 rounded cursor-pointer transition-all"
            onClick={handleOpenHome}
          >
            🏠 Home
          </div>{" "}
          <div
            className="hover:bg-dark dark:hover:bg-secondary dark:hover:text-dark p-2 rounded cursor-pointer transition-all"
            onClick={handleOpenAnalytics}
          >
            📊 Analytics
          </div>{" "}
          <div
            className="hover:bg-dark dark:hover:bg-secondary dark:hover:text-dark p-2 rounded cursor-pointer transition-all"
            onClick={accessibility}
          >
            ⚙️ Settings
          </div>
          {showAlert.show && <Alert type={"info"} message={"Access denied!"} />}
        </ul>
      </aside>
    </>
  );
}
