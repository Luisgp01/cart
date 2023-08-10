import React from "react";
import CartItem from "./CartItem";

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div>
      <h2 className="cart-title">Shop Cart</h2>
      <div className="cart-titles">
              {cartItems.map((item) => (
            
          <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
