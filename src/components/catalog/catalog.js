import React from 'react';
import { Link } from 'react-router-dom';
import './catalog.css'

const products = [
  { id: 1, name: 'Product 1', price: 10, image: 'https://via.placeholder.com/150', description: 'Description for Product 1' },
  { id: 2, name: 'Product 2', price: 20, image: 'https://via.placeholder.com/150', description: 'Description for Product 2' },
  { id: 3, name: 'Product 3', price: 30, image: 'https://via.placeholder.com/150', description: 'Description for Product 3' },
  { id: 1, name: 'Product 4', price: 40, image: 'https://via.placeholder.com/150', description: 'Description for Product 4' },
  { id: 2, name: 'Product 5', price: 50, image: 'https://via.placeholder.com/150', description: 'Description for Product 5' },
  { id: 3, name: 'Product 6', price: 60, image: 'https://via.placeholder.com/150', description: 'Description for Product 6' },
];

const Catalog = ({ addToCart }) => {
  return (
    <main className="container mt-5">
      <h2 className="text-center mb-4">Catalog</h2>
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img src={product.image} className="card-img-top fixed-image" alt={product.name} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text flex-grow-1">{product.description}</p>
                <p className="card-text">${product.price}</p>
                <button className="btn btn-dark mt-auto" onClick={() => addToCart(product)}>
                  <Link className="nav-link" to="/cart">Add to Cart</Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Catalog;
