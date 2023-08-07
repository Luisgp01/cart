import React, { useState } from "react";
import Modal from "react-modal";
import "../../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faKey,
  faUsers,
  faXmark,
  faAddressCard
} from "@fortawesome/free-solid-svg-icons";


const RegisterModal = ({ isOpen, closeModal, props, toggleModal }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);

    setUsername("");
    setPassword("");
    setEmail("");

    closeModal();
  };

  return (
    <Modal
      className={"modal-content"}
      isOpen={isOpen}
      onRequestClose={closeModal}
    >
      <div>
        <h2 className="modal-title">Register</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="input-email modalInput"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <FontAwesomeIcon className="icon-modal" icon={faEnvelope} />
          <input
            className="modalInput"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <FontAwesomeIcon className="icon-modal" icon={faKey} />
          <input
            className="modalInput"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
          <FontAwesomeIcon className="icon-modal" icon={faUsers} />
          <div className="modal-btn btn">
            <button type="submit">Register</button>
            <FontAwesomeIcon className="icon-button" icon={faAddressCard} />
          </div>
          <div className="btnModal">
            <button className="modal-btn btn" onClick={closeModal}>
              Close
              <FontAwesomeIcon className="icon-button" icon={faXmark} />
            </button>
          </div>
        </form>
        <span className="span-text spanText">
          Already registered?{" "}
          <strong>
            {" "}
            <button onClick={toggleModal}>Login</button>
          </strong>
        </span>
      </div>
    </Modal>
  );
};

export default RegisterModal;
