import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const CartItem = ({ item, removeFromCart, products }) => {
  const product = products.find((product) => product.id === item.id);

  return (
    <div>
      <img src={product.image} alt="" />
      <h5>{item.name}</h5>
      <p>Price: ${item.price}</p>
      <button className="button-remove" onClick={() => removeFromCart(item.id)}>
        <p className="btn-remove-text">Remove</p><FontAwesomeIcon className="icon-button-remove" icon={faXmark} />
      </button>
    </div>
  );
};

export default CartItem;