import React, { useState } from "react";
import Modal from "react-modal";

const ContactModal = ({ isOpen, closeModal }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Email:", email);

    setEmail("");

    closeModal();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal}>
      <div className="modal-content">
        <h2>Contact Us</h2>

        <p>Send us your email to contact us</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
          />
          <div>
            <button type="submit">Send</button>
          </div>
          <div>
            <button onClick={closeModal}>Close</button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ContactModal;
