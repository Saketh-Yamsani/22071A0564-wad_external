import React, { useState } from 'react';
import './cart.css';

const Cart = () => {
    const [cart, setCart] = useState([
        
    ]);

    const removeFromCart = (productId) => {
        setCart(cart.filter(product => product.id !== productId));
    };

    return (
        <div className="cart-container">
            <h2>Cart</h2>
            <ul>
                {cart.map(product => (
                    <li key={product.id}>
                        <div className="cart-item">
                            <img src={product.image} alt={product.name} />
                            <div>
                                <p>{product.name} - ${product.price}</p>
                                <button type="button" onClick={() => removeFromCart(product.id)}>Remove from cart</button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;
