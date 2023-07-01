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
  ];
  return (
    <div>
      <div className="cards">
        {cardPayment.map((item, index) => (
          <div key={index}>
            <img src={Image} alt="card" />
            <div>
              <div className="">
                {item.title}
                <div className="">
                  {item.text}
                  <div className="">
                    <button
                      type="button"
                      className="text-white btnStyle focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                      Change Subscription
                    </button>
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
