import Link from "next/link";
import React from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { useStateContext } from "../context/StateContext";
import { Cart } from ".";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantity } = useStateContext();
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">e Commerce</Link>
      </p>

      <button
        type="button"
        className="cart-icon"
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantity}</span>
      </button>

      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
