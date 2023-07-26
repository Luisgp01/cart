import React from "react";
import Image from '../../img/card2.jpg'

export default function CardInfo() {
    const cardData = [
      {
        button: "",
        image: { Image },
        title: "Noteworthy technology acquisitions 2021",
        text: " Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      },
      {
        button: "",
        image: { Image },
        title: "Noteworthy technology acquisitions 2021",
        text: " Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      },
      {
        button: "",
        image: { Image },
        title: "Noteworthy technology acquisitions 2021",
        text: " Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      },
    ];

  return (
    <div>
      {cardData.map((item, index) => (
        <div key={index}>
          <a
            href="/"
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-28 md:rounded-none md:rounded-l-lg"
              src={Image}
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                <p>{item.title}</p>
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
               {item.text}
              </p>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}
