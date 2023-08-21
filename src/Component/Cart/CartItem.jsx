import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const CartItem = ({ item, removeFromCart, products }) => {
  const product = products.find((product) => product.id === item.id);

  return (
    <div>
      <div className="cartImg">
      <img src={product.image} alt="" />
      </div>
      <h5 className="cartText">{item.name}</h5>
      <p className="cartText">Price: ${item.price}</p>
      <button className="button-remove"  onClick={() => removeFromCart(item.id)}>
        Remove<FontAwesomeIcon className="icon-button-remove" icon={faXmark} />
      </button>
    </div>
  );
};

export default CartItem;