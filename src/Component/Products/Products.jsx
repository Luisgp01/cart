import React, { useState } from "react";
import Image from "../../img/card.jpg";
import "../../index.css";

export default function CardHome() {
  const [hover, setHover] = useState();

  const cardHome = [
    {
      titulo: "Headphones",
      texto:
        "Quisque dictum tincidunt interdum. Vestibulum maximus lacus sit amet libero semper porta. Vestibulum vitae massa tellus. Duis ultrices sagittis porta. Morbi quis ligula ante",
      image: { Image },
      button: "Add Cart",
      price: "€20",
    },
    {
      titulo: "Headphones",
      texto:
        "Quisque dictum tincidunt interdum. Vestibulum maximus lacus sit amet libero semper porta. Vestibulum vitae massa tellus. Duis ultrices sagittis porta. Morbi quis ligula ante",
      image: { Image },
      button: "Add Cart",
      price: "€20",
    },

    {
      titulo: "Headphones",
      texto:
        "Quisque dictum tincidunt interdum. Vestibulum maximus lacus sit amet libero semper porta. Vestibulum vitae massa tellus. Duis ultrices sagittis porta. Morbi quis ligula ante",
      image: { Image },
      button: "Add Cart",
      price: "€20",
    },
    {
      titulo: "Headphones",
      texto:
        "Quisque dictum tincidunt interdum. Vestibulum maximus lacus sit amet libero semper porta. Vestibulum vitae massa tellus. Duis ultrices sagittis porta. Morbi quis ligula ante",
      image: { Image },
      button: "Add Cart",
      price: "€20",
    },
  ];

  const onClick = (e, item) => {
    e.preventDefault();
  };

  const handleMouseIn = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };

  return (
    <div className="productCard">
      {cardHome.map((item, index) => (
        <div key={index} className="card  m-5">
          <img src={Image} alt="/" />
          <div className="card-body shadow-lg">
            <div className="card-title title">
              {item.titulo}
              <div className="card-text">
                {item.texto}
                <div className="price">
                  {item.price}
                </div>
                <a
                  href="/"
                  className="btn"
                  onClick={(e) => {
                    onClick(e, item);
                  }}
                  onMouseOver={handleMouseIn}
                  onMouseOut={handleMouseOut}
                >
                  {item.button}
                  <i className="fa-solid icon fa-cart-shopping"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
