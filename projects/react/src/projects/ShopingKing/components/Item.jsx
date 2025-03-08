import React from "react";
import Button from "./ui/Button";
import { FaPlus, FaMinus, FaTrashAlt } from "react-icons/fa";
export default function Item({ item, updateQuantity, removeFromCart }) {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex  items-center space-x-2">
        <p className="font-semibold text-xl">{item.name} -</p>
        <p className="text-green-600  font-semibold dark:text-green-400">
          ${item.price.toFixed(2)}
        </p>{" "}
        <span className="ml-4">= ${item.total.toFixed(2)}</span>
      </div>
      <div className="flex items-center space-x-2">
        <div className="flex items-center border border-1-4 border-slate-200 px-1 py-1 rounded-md">
          <Button
            bgColor={"slate-100"}
            onClick={() => updateQuantity(item.id, -1)}
            classes={
              "hover:text-red-400 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
            }
          >
            <FaMinus size={14} />
          </Button>
          <p className="mx-1">x {item.quantity}</p>
          <Button
            bgColor={"slate-100"}
            onClick={() => updateQuantity(item.id, 1)}
            classes={
              "hover:text-green-400 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
            }
          >
            <FaPlus size={14} />
          </Button>
        </div>
        <Button
          bgColor={"slate-100"}
          onClick={() => removeFromCart(item.id)}
          classes={
            "hover:text-red-600 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
          }
        >
          <FaTrashAlt size={14} />
        </Button>
      </div>
    </div>
  );
}
