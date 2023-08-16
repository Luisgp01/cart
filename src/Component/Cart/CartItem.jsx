import React from "react";

const CartItem = ({ item, removeFromCart, products }) => {

  const product = products.find((product) => product.id === item.id);
  
  return (
    <div>
      <div>
      <img src={product.image} alt={product.name} />
      </div>
      <h4>{item.name}</h4>
      <p>Price: ${item.price}</p>
      <button onClick={() => removeFromCart(item.id)}>Remove</button>
    </div>
  );
};

export default CartItem;
