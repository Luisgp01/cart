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
import ContactModal from "./Component/Modal/ContactModal";


function App() {

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const openRegisterModal = () => {
    setIsRegisterModalOpen(true);
  };
  const openContactModal = () => {
    setIsContactModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const closeRegisterModal = () => {
    setIsRegisterModalOpen(false);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false)
  }


  return (
    <div className="flex-center">
      <Modal
        openLoginModal={openLoginModal}
        openRegisterModal={openRegisterModal}
        openContactModal={openContactModal}
      />
      <LoginModal isOpen={isLoginModalOpen} closeModal={closeLoginModal} />
      <RegisterModal
        isOpen={isRegisterModalOpen}
        closeModal={closeRegisterModal}
      />
      {
        <ContactModal
          isOpen={isContactModalOpen}
          closeModal={closeContactModal}
        />
      }
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
