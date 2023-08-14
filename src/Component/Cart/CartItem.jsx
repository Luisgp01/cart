import React from "react";

const CartItem = ({ product, removeFromCart, addToCart }) => {
  return (
    <div>
      <h4>{product.name}</h4>
      <p>Price: ${product.price}</p>
      <button onClick={() => removeFromCart(product.id)}>Remove</button>
      <button onClick={() => addToCart(product)}>Add to Cart</button>{" "}
    </div>
  );
};

export default CartItem;
