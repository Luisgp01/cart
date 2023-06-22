import "../../index.css"

import React from 'react'

export default function Navbar() {
  return (
     <div className="navBar">
      <a className="active" href="#Home" alt="image">
        Store
      </a>
      <a  href="#Home">Login</a>
      <a href="#Home">Register</a>
      <a href="#Home">Contact</a>
    </div>
  );
}
