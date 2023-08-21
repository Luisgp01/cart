import React, { useState } from "react";
import Modal from "react-modal";
import "../../index.css";
import {
  faXmark,
  faEnvelope,
  faInbox
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
        <FontAwesomeIcon className="contactImg" icon={faInbox} />
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="input-email modalInput"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
          />
          <FontAwesomeIcon className="icon-modal" icon={faEnvelope} />
          <div>
            <button className="modal-btn btn" type="submit">
              Send
              <FontAwesomeIcon className="icon-button" icon={faEnvelope} />
            </button>
          </div>
          <div className="btnModal">
            <button className="modal-btn btn" onClick={closeModal}>
              Close
              <FontAwesomeIcon className="icon-button" icon={faXmark} />
            </button>
          </div>
        </form>
        <span className="span-text spanText">
          Send us your email to contact you in case of <strong>problem</strong>
        </span>
      </div>
    </Modal>
  );
};

export default ContactModal;
