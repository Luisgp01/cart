import React from "react";
import "../../index.css";
import Image from "../../img/card.jpg";

export default function Products() {
  const cardItem = [
    {
      title: "Lorem ipsum card nat",
      body: "Headphones",
      footer: "Add cart",
    },
    {
      title: "Lorem ipsum card nat",
      body: "Headphones",
      footer: "Add cart",
    },
    {
      title: "Lorem ipsum card nat",
      body: "Headphones",
      footer: "Add cart",
    },
  ];

  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg cardContent">
        {cardItem.map((cardItem, index) => (
          <div key={index} className="cardBody">
            <img className="w-full" src={Image} alt="Sunset in the mountains" />
            <div className="font-bold text-xl mb-2">
              {cardItem.title}
              <div className="text-gray-700 text-base">
                {cardItem.body}
                <br />
                <button href="/" type="submit" className="border btn">
                  {cardItem.footer}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
