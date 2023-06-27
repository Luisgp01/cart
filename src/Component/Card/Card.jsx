import React from "react";
import Image from "../../img/subscribe.jpg";
import '../../index.css'

export default function Card() {
  const cardPayment = [
    {
      title: "Subscription",
      image: { Image },
      text: "Some quick example text to build on the card title and make up",
    },
    {
      title: "Subscription",
      image: { Image },
      text: "Some quick example text to build on the card title and make up",
    },
  ];
  return (
    <div className="">
      <div className="card">
        {cardPayment.map((item, index) => (
          <div key={index}>
            <img src={Image} alt="" />
            <div className="productCard">
              <div className="">
                {item.title}
                <div className="">
                  {item.text}
                  <div className="">
                    <a className="btn" href="/">Modify Subscription</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
