import React, { useState } from "react";
import Products from "../Component/Products/Product";
import Footer from "../Component/Footer/Footer";
import Gallery from "../Component/Gallery/Gallery";
import CardInfo from "../Component/Card/CardInfo";
import Modal from "../Component/Modal/Modal";
import LoginModal from "../Component/Modal/LoginModal";
import RegisterModal from "../Component/Modal/RegisterModal";
import ContactModal from "../Component/Modal/ContactModal";

function HomePage() {

  const [cartCount, addCartCount] = useState(0);

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
    setIsContactModalOpen(false);
  };

  const toggleModal = () => {
    setIsLoginModalOpen(!isLoginModalOpen);
    setIsRegisterModalOpen(!isRegisterModalOpen);
  };

  const handleCount = () => {
    addCartCount(cartCount + 1);
  };

  const addToCart = () => {
    addCartCount(addToCart + 1);
  }


  return (
    <div>
      <Modal
        openLoginModal={openLoginModal}
        openRegisterModal={openRegisterModal}
        openContactModal={openContactModal}
        cartCount={cartCount}
      />
      <LoginModal
        isOpen={isLoginModalOpen}
        closeModal={closeLoginModal}
        toggleModal={toggleModal}
      />
      <RegisterModal
        isOpen={isRegisterModalOpen}
        closeModal={closeRegisterModal}
        toggleModal={toggleModal}
      />
      <ContactModal
        isOpen={isContactModalOpen}
        closeModal={closeContactModal}
      />
      <br />
      <div>
        <Gallery />
      </div>
      <br />
      <div>
        <h5 className="flash">Rapid Sales</h5>
        <hr />
        <Products handleCount={handleCount} addToCart={addToCart} />
      </div>
      <hr />
      <div className="cardin">
        <CardInfo className="absolute" />
      </div>

      <br />
      <br />
      <Footer />
    </div>
  );
}

export default HomePage;
