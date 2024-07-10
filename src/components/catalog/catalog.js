import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './catalog.css';

const Catalog = () => {
    const [cart, setCart] = useState([]);

    const products = [
        { id: 1, name: 'Product 1', price: 10, image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Product 2', price: 20, image: 'https://via.placeholder.com/150' },
        { id: 3, name: 'Product 3', price: 30, image: 'https://via.placeholder.com/150' },
        { id: 4, name: 'Product 4', price: 40, image: 'https://via.placeholder.com/150' },
        { id: 5, name: 'Product 5', price: 50, image: 'https://via.placeholder.com/150' },
        { id: 6, name: 'Product 6', price: 60, image: 'https://via.placeholder.com/150' },
    ];

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    return (
        <div className="catalog-container">
            <h2>Catalog</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <div className="product-item">
                            <img src={product.image} alt={product.name} />
                            <div>
                                <p>{product.name}</p>
                                <p>${product.price}</p>
                                <button onClick={() => addToCart(product)}><Link className="nav-link" to="/cart">Add to Cart</Link></button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Catalog;
