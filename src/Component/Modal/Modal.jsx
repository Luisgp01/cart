import React from "react";
import "../../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faUser,
  faAddressCard,
  faMessage,
  faStore
} from "@fortawesome/free-solid-svg-icons";



const Modal = ({ openLoginModal, openRegisterModal, openContactModal }) => {
  return (
    <nav className="navBar">
      <a className="active" href="#Home" alt="image">
        <FontAwesomeIcon  icon={faStore} />
        Store
      </a>

      <button onClick={openLoginModal}>
        Login
        <FontAwesomeIcon className="icon-navbar" icon={faUser} />
      </button>
      <button onClick={openRegisterModal}>
        Register
        <FontAwesomeIcon className="icon-navbar" icon={faAddressCard} />
      </button>
      <button onClick={openContactModal}>
        Contact
        <FontAwesomeIcon className="icon-navbar" icon={faMessage} />
      </button>
    </nav>
  );
};

export default Modal;
