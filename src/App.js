import "./index.css";
import Checkout from "./Component/Checkout/Checkout";
import Form from "./Component/Form/Form";
//import Navbar from "./Component/Navbar/Navbar";
import Products from "./Component/Products/Products";
import Footer from "./Component/Footer/Footer";
import Gallery from "./Component/Gallery/Gallery";
import CardInfo from "./Component/Card/CardInfo";
import Modal from "./Component/Modal/Modal";
import LoginModal from "./Component/Modal/LoginModal";
import RegisterModal from "./Component/Modal/RegisterModal";
import React, { useState } from "react";


function App() {

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const openRegisterModal = () => {
    setIsRegisterModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const closeRegisterModal = () => {
    setIsRegisterModalOpen(false);
  };


  return (
    <div className="flex-center">
      <Modal
        openLoginModal={openLoginModal}
        openRegisterModal={openRegisterModal}
      />
      <LoginModal isOpen={isLoginModalOpen} closeModal={closeLoginModal} />
      <RegisterModal
        isOpen={isRegisterModalOpen}
        closeModal={closeRegisterModal}
      />
      <br />
      <div>
        <Gallery />
      </div>
      <br />
      <div>
        <Products />
      </div>
      <div className="cardin">
        <CardInfo />
      </div>
      <div>
        <Form />
        <Checkout />
      </div>
      <Footer />
    </div>
  );
}

export default App;
