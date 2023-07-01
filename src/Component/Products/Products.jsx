import React from "react";
import Image from "../../img/card.jpg";
import "../../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Picture from "../../img/card2.jpg";
import Image3 from "../../img/card3.jpg";
import Image4 from "../../img/card4.jpg";


export default function CardHome() {

  const cardHome = [
    {
      titulo: "Headphones",
      texto:
        "Quisque dictum tincidunt interdum. Vestibulum maximus lacus sit amet libero semper porta. Vestibulum vitae massa tellus. Duis ultrices sagittis porta. Morbi quis ligula ante",
      image: { Image },
      button: "Add Cart",
      price: "€11.50",
    },
    {
      titulo: "Headphones",
      texto:
        "Quisque dictum tincidunt interdum. Vestibulum maximus lacus sit amet libero semper porta. Vestibulum vitae massa tellus. Duis ultrices sagittis porta. Morbi quis ligula ante",
      image: { Picture },
      button: "Add Cart",
      price: "€7.50",
    },

    {
      titulo: "Headphones",
      texto:
        "Quisque dictum tincidunt interdum. Vestibulum maximus lacus sit amet libero semper porta. Vestibulum vitae massa tellus. Duis ultrices sagittis porta. Morbi quis ligula ante",
      image: { Image3 },
      button: "Add Cart",
      price: "€12.00",
    },
    {
      titulo: "Headphones",
      texto:
        "Quisque dictum tincidunt interdum. Vestibulum maximus lacus sit amet libero semper porta. Vestibulum vitae massa tellus. Duis ultrices sagittis porta. Morbi quis ligula ante",
      image: { Image4 },
      button: "Add Cart",
      price: "€20.00",
    },
  ];

  const onClick = (e, item) => {
    e.preventDefault();
  };

  return (
    <div className="productCard">
      {cardHome.map((item, index) => (
        <div key={index}  className="card  m-5">
          <img src={Image3} alt="/" />
          <div>
            <div className="title">
             <span> {item.titulo}</span>
              <div className="text">
                {item.texto}
                <div className="price">{item.price}</div>
                <a
                  href="/"
                  className="btn btnDir"
                  onClick={(e) => {
                    onClick(e, item);
                  }}
                >
                  {item.button}
                  <FontAwesomeIcon className="cart" icon={faCartShopping} beat fade/>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
