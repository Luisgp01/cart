import React from 'react';
import CartItem from './CartItem';

const Cart = (cartItems, removeFromCart) => {
    return (
        <div>
            <h2>Shop Cart</h2>
            {cartItems.map((item) => (
                <CartItem key={item.id} item={item} removeFromCart={removeFromCart } />
            ))}
        </div>
    );
};

export default Cart;