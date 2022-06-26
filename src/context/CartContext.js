import { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addToCart = (id, name, price, size, amount, color) => {
    setItems((prevState) => [
      ...prevState,
      {
        id: id,
        name: name,
        size: size,
        color: color,
        price: price,
        amount: amount,
      },
    ]);
  };

  return <CartContext.Provider value={{ items, addToCart }}>{children}</CartContext.Provider>;
}

export default CartContext;
