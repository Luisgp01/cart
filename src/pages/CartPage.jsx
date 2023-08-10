import React, {useState} from 'react'
import Checkout from '../Component/Checkout/Checkout'
import Form from '../Component/Form/Form'
import Cart from '../Component/Cart/Cart'


export default function CartPage() {
 
  const removeFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems)
 }

 const [cartItems, setCartItems] = useState([
   { id: 1, name: "Headphones", price: 11.5 },
   { id: 2, name: "Asus", price: 7.5 },
   { id: 3, name: "Mouse", price: 12.0 },
   { id: 4, name: "iPAD", price: 20.0 },
 ]);

  
  return (
    <div>
      <Cart cartItems={cartItems} removeFromCart={removeFromCart}/>
      <Form />
      <Checkout />
    </div>
  );
}
