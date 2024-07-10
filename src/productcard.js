import React from 'react';
import { useNavigate } from 'react-router-dom';
const ProductCard = ({ product, addToCart }) => {
  const navigate = useNavigate();
  const handleAddToCart = () => {
    addToCart(product);
    navigate('/cart');
  };
let product=product
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};
export default ProductCard;



