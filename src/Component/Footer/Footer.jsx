import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faTwitter,
  faInstagram,
  faMeta,
} from "@fortawesome/free-brands-svg-icons";

import {
  faStore
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-beige rounded-lg shadow dark:bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0"
          >
            <FontAwesomeIcon className="fa-fade footerBrand h-8 mr-1" icon={faStore} />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Store
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="/" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="/" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/" className="mr-4 hover:underline md:mr-6 ">
                Licensing
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="socialFooter">
          <h2>Follow us on our Social Media!</h2>
        </div>
        <br />
        <div>
        <button>
          <FontAwesomeIcon className="iconSocial" icon={faTwitter} />
        </button>
        <button>
          <FontAwesomeIcon className="iconSocial" icon={faInstagram} />
        </button>
        <button>
          <FontAwesomeIcon className="iconSocial" icon={faMeta} />
        </button>
        </div>
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Store™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
