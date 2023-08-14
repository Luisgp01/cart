import React, {useState} from 'react'
import Checkout from '../Component/Checkout/Checkout'
import Form from '../Component/Form/Form'
import Cart from '../Component/Cart/Cart'
import ProductList from '../Component/Products/ProductList'


export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Headphones", price: 11.5 },
    { id: 2, name: "Asus", price: 7.5 },
    { id: 3, name: "Mouse", price: 12.0 },
    { id: 4, name: "iPAD", price: 20.0 },
  ]);

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
      />
      <Form />
      <Checkout />
      <ProductList addToCart={handleAddToCart} />
    </div>
  );
}
