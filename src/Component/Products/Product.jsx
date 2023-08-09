import React, {useState} from "react";
import Image from "../../img/card.jpg";
import "../../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Picture from "../../img/card2.jpg";
import Image3 from "../../img/card3.jpg";
import Image4 from "../../img/card4.jpg";
import ProductList from "./ProductList";




export default function CardHome({ handleCount, addToCart, handleAddToCart }) {
  const [showAlert, setShowAlert] = useState(false);

  const cardHome = [
    {
      id: 1,
      titulo: "Headphones",
      texto:
        "Quisque dictum tincidunt interdum. Vestibulum maximus lacus sit amet libero semper porta. Vestibulum vitae massa tellus. Duis ultrices sagittis porta. Morbi quis ligula ante",
      image: Image,
      button: "Add Cart",
      price: "€11.50",
    },
    {
      id: 2,
      titulo: "Asus",
      texto:
        "Quisque dictum tincidunt interdum. Vestibulum maximus lacus sit amet libero semper porta. Vestibulum vitae massa tellus. Duis ultrices sagittis porta. Morbi quis ligula ante",
      image: Picture,
      button: "Add Cart",
      price: "€7.50",
    },

    {
      id: 3,
      titulo: "Mouse",
      texto:
        "Quisque dictum tincidunt interdum. Vestibulum maximus lacus sit amet libero semper porta. Vestibulum vitae massa tellus. Duis ultrices sagittis porta. Morbi quis ligula ante",
      image: Image3,
      button: "Add Cart",
      price: "€12.00",
    },
    {
      id: 4,
      titulo: "iPAD",
      texto:
        "Quisque dictum tincidunt interdum. Vestibulum maximus lacus sit amet libero semper porta. Vestibulum vitae massa tellus. Duis ultrices sagittis porta. Morbi quis ligula ante",
      image: Image4,
      button: "Add Cart",
      price: "€20.00",
    },
  ];

  const onClick = (e, item) => {
    e.preventDefault();
    handleCount();
    alert("Item added to cart!");
    setShowAlert(true);
    handleAddToCart(item);
  };

  return (
    <div className="productCard">
      {cardHome.map((item, index) => (
        <div key={index} className="card  m-5">
          <img src={item.image} alt="/" />
          <div>
            <div className="title">
              <span className="text-grey text-3xl font-bold">
                {" "}
                {item.titulo}
              </span>
              <div className="text-black text-sm cardText">
                {item.texto}
                <div className="price">{item.price}</div>
                <a
                  href="/"
                  className="btn btnDir text-button-card"
                  onClick={(e) => {
                    onClick(e, item, addToCart);
                  }}
                >
                  {item.button}
                  <FontAwesomeIcon
                    className="cart"
                    icon={faCartShopping}
                    bounce
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
