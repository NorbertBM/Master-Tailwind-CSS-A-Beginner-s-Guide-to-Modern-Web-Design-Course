import React from "react";
import Card from "../utility/Card";
import { FaCartArrowDown, FaMoneyBill, FaUserFriends } from "react-icons/fa";
import Loading from "../utility/Loading";

export default function Main({ isLoading }) {
  return (
    <main className="p-6 text-center grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 md:text-left">
      <Card
        icon={<FaUserFriends size={38} />}
        title="Users"
        text={isLoading ? <Loading /> : "1,245"}
      />
      <Card
        icon={<FaMoneyBill size={38} />}
        title="Revenue"
        text={isLoading ? <Loading /> : "$50,000"}
      />
      <Card
        icon={<FaCartArrowDown size={38} />}
        title="Orders"
        text={isLoading ? <Loading /> : "342"}
      />
    </main>
  );
}
