import React from "react";
import "../../index.css";
import LoginModal from "./LoginModal"; // Use default import
import RegisterModal from "./RegisterModal"; // Use default import

const Modal = ({ openLoginModal, openRegisterModal, openContactModal }) => {
  return (
    <nav className="navBar">
      <a className="active" href="#Home" alt="image">
        Store
      </a>

      <button onClick={openLoginModal}>Login</button>
      <button onClick={openRegisterModal}>Register</button>
      <button onClick={openContactModal}>Contact</button>
    </nav>
  );
};

export default Modal;
