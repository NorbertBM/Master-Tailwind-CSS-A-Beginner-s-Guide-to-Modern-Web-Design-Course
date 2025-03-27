import React from "react";
import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa";
import Button from "./util/Button";
export default function Item({ item, updateQuantity, removeFromCart }) {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex items-center space-x-2">
        <p className="font-semibold text-xl">{item.name}</p>
        <p className="text-green-600 font-semibold dark:text-green-400">
          ${item.price.toFixed(2)}
        </p>
        <span className="ml-4">= ${item.total.toFixed(2)} </span>
      </div>
      <div className="flex item-center space-x-2">
        <div className="flex item-center border border-1-4 border-slate-200 p-1 rounded-md">
          <Button
            color="slate"
            value={100}
            onClick={() => updateQuantity(item.id, -1)}
            cusClasses={
              "hover:text-red-500 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
            }
          >
            <FaMinus size={14} />
          </Button>
          <p className="mx-1">x {item.quantity}</p>
          <Button
            color="slate"
            value={100}
            onClick={() => updateQuantity(item.id, 1)}
            cusClasses={
              "hover:text-green-500 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
            }
          >
            <FaPlus size={14} />
          </Button>
        </div>
        <Button
          color="slate"
          value={100}
          onClick={() => removeFromCart(item.id)}
          cusClasses={
            "hover:text-red-500 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
          }
        >
          <FaTrashAlt size={14} />
        </Button>
      </div>
    </div>
  );
}
