// ProductList.js
import React from 'react';
import { useSelector } from 'react-redux';

const ProductList = () => {
  const products = useSelector((state) => state.products); // Assuming you have products in your Redux state

  return (
    <div className="product-list">
      <h2>Products</h2>
      <div className="products-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.amount}</p>
            <p>Rating: {product.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
