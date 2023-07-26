import React, { useState } from "react";
import Modal from "react-modal";
import "../../index.css";

const RegisterModal = ({ isOpen, closeModal, props }) => {
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
    <Modal isOpen={isOpen} onRequestClose={closeModal}>
      <div className="modal-content">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button type="submit">Register</button>
          <button onClick={closeModal}>Close</button>
        </form>
      </div>
    </Modal>
  );
};

export default RegisterModal;
