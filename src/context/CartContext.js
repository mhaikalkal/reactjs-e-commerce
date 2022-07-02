import { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const { id, name, price, size, amount, color } = product;

    // item disini merupakan isi cart.
    // cari apakah item yg mau ditambahkan udah ada di dalem cart
    let item = cart.find((item) => item.id === id);

    // jika item udah ada di cart, maka tambah amount-nya aja.
    if (item) {
      item.amount++;
    } else {
      // jika item belum ada, maka bikin array baru yg isinya quantity/amount product, price/harga, dan rest Product
      setCart(
        cart.concat({
          amount: 1,
          price: price,
          ...product,
        })
      );
    }
  };

  return <CartContext.Provider value={{ cart, addToCart }}>{children}</CartContext.Provider>;
}

export default CartContext;
