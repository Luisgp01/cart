import "../../index.css";
import React from "react";



export default function Navbar() {

  return (
    <div className="navBar">
      <a className="active" href="#Home" alt="image">
        Store
      </a>

      <a href="/login">Login</a>
      <a href="/register">Register</a>
      <a href="#Home">Contact</a>
      </div>
  );
}
