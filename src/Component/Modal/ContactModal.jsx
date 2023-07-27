import React, { useState } from "react";
import Modal from "react-modal";
import "../../index.css";
import {
  faXmark,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactModal = ({ isOpen, closeModal }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Email:", email);

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
        <h2 className="modal-title">Contact Us</h2>

        <span className="span-text">
          Send us your email to contact you in case of <strong>problem</strong>
        </span>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="input-email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
          />
          <div>
            <button className="modal-btn btn" type="submit">
              Send
              <FontAwesomeIcon className="icon-button" icon={faEnvelope} />
            </button>
          </div>
          <div>
            <button className="modal-btn btn" onClick={closeModal}>
              Close
              <FontAwesomeIcon className="icon-button" icon={faXmark} />
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ContactModal;
