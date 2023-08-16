import React, {useState} from 'react'
import Checkout from '../Component/Checkout/Checkout'
import Form from '../Component/Form/Form'
import Cart from '../Component/Cart/Cart'




export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Headphones", price: 11.5, image: "../../img/card.jpg" },
    { id: 2, name: "Asus", price: 7.5, image: "../../img/card2.jpg" },
    { id: 3, name: "Mouse", price: 12.0, image: "../../img/card3.jpg" },
    { id: 4, name: "iPAD", price: 20.0, image: "../../img/card4.jpg" },
  ]);

    const products = [
      { id: 1, name: "Headphones", price: 11.5, image: "../../../img/card.jpg" },
      { id: 2, name: "Asus", price: 7.5, image: "../../img/card2.jpg" },
      { id: 3, name: "Mouse", price: 12.0, image: "../../img/card3.jpg" },
      { id: 4, name: "iPAD", price: 20.0, image: "../../img/card4.jpg" },
    ];


  const handleAddToCart = (item) => {
    const isItemInCart = cartItems.some((cartItem) => cartItem.id === item.id);

    if (!isItemInCart) {
      setCartItems([...cartItems, item]);
    }
  };

  const removeFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  return (
    <div>
      <Cart
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        handleAddToCart={handleAddToCart}
        products={products}
        addToCart={handleAddToCart}
      />
      <Form />
      <Checkout />
    </div>
  );
}
