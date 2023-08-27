import React from "react";
import CartItem from "./CartItem";


const Cart = ({ cartItems, removeFromCart, handleAddToCart, products }) => {

 const total = cartItems.reduce((sum, item) => sum + parseInt(item.price), 0);

  return (
    <div>
      <h2 className="cart-title">Shop Cart</h2>
      <br />
      <br />
      <br />
      <div className="cart-titles">
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            // products={products}
            removeFromCart={removeFromCart}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <div className="cart-title">Total Price: ${total.toFixed(2)}</div>
      <br />
    </div>
  );
};

export default Cart;
