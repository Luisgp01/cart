import React, {useState} from 'react'
import Checkout from '../Component/Checkout/Checkout'
import Form from '../Component/Form/Form'
import Cart from '../Component/Cart/Cart'
import Picture from "../img/card2.jpg";
import Image3 from "../img/card3.jpg";
import Image4 from "../img/card4.jpg";
import Image from "../img/card.jpg";
import { useLocation } from 'react-router-dom';



export default function CartPage() {
  const location = useLocation()

  const { items } = location.state

  const [cartItems, setCartItems] = useState(items);
  
    // const products = [
      // { id: 1, name: "Headphones", price: 11.5, image: Image },
      // { id: 2, name: "Asus", price: 7.5, image: Picture },
      // { id: 3, name: "Mouse", price: 12.0, image: Image3 },
      // { id: 4, name: "iPAD", price: 20.0, image: Image4 },
    // ];


  const handleAddToCart = (item) => {
    const isItemInCart = cartItems.some((cartItem) => cartItem.id === item.id);

    if (!isItemInCart) {
      setCartItems([...cartItems, item]);
    }
  };

  const removeFromCart = (itemId) => {
    console.log(itemId);
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    console.log(updatedCartItems);
    setCartItems(updatedCartItems);
  };

  return (
    <div>
      <Cart
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        handleAddToCart={handleAddToCart}
        // products={products}
      />
      <Form />
      <Checkout />
    </div>
  );
}
