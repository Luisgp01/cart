import React, { useState } from "react";
import Modal from "react-modal";
import "../../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightToBracket,
  faUsers,
  faKey,
  faXmark
} from "@fortawesome/free-solid-svg-icons";

import Image4 from "../../img/loginModal1.png";

const LoginModal = ({ isOpen, closeModal, props, toggleModal }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Username:", username);
    console.log("Password:", password);

    setUsername("");
    setPassword("");

    closeModal();
  };

  return (
    <Modal
      className={"modal-content"}
      isOpen={isOpen}
      onRequestClose={closeModal}
    >
      <div>
        <h2 className="modal-title">Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            className="modalInput"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
          <FontAwesomeIcon className="icon-modal" icon={faUsers} />
          <input
            className="modalInput"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <FontAwesomeIcon className="icon-modal" icon={faKey} />
          <div className="modal-btn btn">
            <button type="submit">Login</button>
            <FontAwesomeIcon className="icon-button" icon={faRightToBracket} />
          </div>
          <div className="btnModal">
            <button className="modal-btn btn" onClick={closeModal}>
              Close
            </button>
            <FontAwesomeIcon className="iconbuttonLogin" icon={faXmark} />
          </div>
        </form>
        <span className="span-text">
          not registered, yet?{" "}
          <strong>
            {" "}
            <button onClick={toggleModal}>Register now</button>
          </strong>
        </span>
        <img className="modalImg" src={Image4} alt="login" />
      </div>
    </Modal>
  );
};

export default LoginModal;
