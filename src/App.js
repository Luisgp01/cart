import "./index.css";

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import Modal from "react-modal";

Modal.setAppElement("#root");

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
