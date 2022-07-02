import React from "react";
import { useContext } from "react";
import CartContext from "../../context/CartContext";

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <>
      {console.log(cart)}
      {cart.map((item) => console.log(item))}
      <h2>Nike Air Force 1 - White</h2>
      <h5>1000000</h5>
      <p>Remaining Stock : 80</p>
      <p>amount : 1</p>
    </>
  );
};

export default Cart;
