import React, { useState } from "react";
import Products from "../Component/Products/Product";
import Footer from "../Component/Footer/Footer";
import Gallery from "../Component/Gallery/Gallery";
import CardInfo from "../Component/Card/CardInfo";
import Navbar from "../Component/Modal/Navbar";
import LoginModal from "../Component/Modal/LoginModal";
import RegisterModal from "../Component/Modal/RegisterModal";
import ContactModal from "../Component/Modal/ContactModal";

function HomePage() {

  const [cartItems, addCartItems] = useState([]);
  

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

  const handleCount = (item) => {
    const productsToAdd = [...cartItems,item]

    addCartItems(productsToAdd);
    console.log(productsToAdd);
  };



  return (
    <div>
      <Navbar
        openLoginModal={openLoginModal}
        openRegisterModal={openRegisterModal}
        openContactModal={openContactModal}
        cartItems={cartItems}
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
      <div className="container   mx-auto px-4">
        <Gallery />
      </div>
      <br />
      <div className="container  mx-auto ">
        <h2 className="text-center text-2xl uppercase">Rapid Sales</h2>
        <hr />
        <Products handleCount={handleCount} />
      </div>
      <hr />
      <div className="px-4">
        <CardInfo />
      </div>

      <br />
      <br />
   <Footer /> 
    </div>
  );
}

export default HomePage;
