import React, { useState, useEffect } from "react";
import { useStateContext } from "@/context/StateContext";
import { BsBagCheckFill } from "react-icons/bs";
import Link from "next/link";
import { startFireworks } from "@/lib/utils";

const Success = () => {
  const { setTotalQuantity, setTotalPrice, setCartItems } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setTotalQuantity(0);
    setTotalPrice(0);
    setCartItems([]);
    startFireworks();
  }, []);
  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your order!</h2>
        <p className="email-msg">Check your email inbox for your receipt.</p>
        <p className="description">
          If you have any questions, please feel free to contact us.
          <a href="mailto:order@gmail.com" className="email">
            order@gmail.com
          </a>
          <Link href="/">
            <button className="btn" type="button" width="300px">
              Continue Shopping
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Success;
