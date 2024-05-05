import React, { useState, useContext, createContext, useEffect } from "react";
import { toast } from "react-hot-toast";
const Context = createContext();

export const StateContext = ({ children }) => {
  const [qty, setQty] = useState(1);
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  let foundProduct;
  let index;

  const changeQuantityOnCart = (id, value) => {
    foundProduct = cartItems.find((item) => item._id === id);
    index = cartItems.findIndex((item) => item._id === id);

    const updatedCartItems = cartItems.filter((item) => item._id !== id);

    if (value === "inc") {
      setCartItems([
        ...updatedCartItems,
        { ...foundProduct, quantity: foundProduct.quantity + 1 },
      ]);
      setTotalPrice(totalPrice + foundProduct.price);
      setTotalQuantity(totalQuantity + 1);
    } else if (value === "dec") {
      if (foundProduct.quantity > 1) {
        setCartItems([
          ...updatedCartItems,
          { ...foundProduct, quantity: foundProduct.quantity - 1 },
        ]);
        setTotalPrice(totalPrice - foundProduct.price);
        setTotalQuantity(totalQuantity - 1);
      }
    }
  };

  const onRemove = (product) => {
    setCartItems(cartItems.filter((x) => x._id !== product._id));
    setTotalPrice(totalPrice - product.price * product.quantity);
    setTotalQuantity(totalQuantity - product.quantity);
    toast.error(`${product.name} removed from cart`);
  };

  const onAdd = (product, quantity) => {
    const exist = cartItems.find((x) => x._id === product._id);
    setTotalPrice(totalPrice + product.price * quantity);
    setTotalQuantity(totalQuantity + quantity);

    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x._id === product._id
            ? { ...exist, quantity: exist.quantity + quantity }
            : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity }]);
    }

    toast.success(`${qty} ${product.name} added to cart`);
  };

  const incQty = () => {
    setQty((prev) => prev + 1);
  };

  const decQty = () => {
    setQty((prev) => (prev === 1 ? prev : prev - 1));
  };

  return (
    <Context.Provider
      value={{
        qty,
        showCart,
        setShowCart,
        cartItems,
        totalPrice,
        totalQuantity,
        incQty,
        decQty,
        onAdd,
        changeQuantityOnCart,
        onRemove,
        setCartItems,
        setTotalPrice,
        setTotalQuantity,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => {
  return useContext(Context);
};
