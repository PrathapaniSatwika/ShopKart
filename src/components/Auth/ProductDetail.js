// ProductDetail.js
document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
  
    try {
      if (!productId) {
        throw new Error('Product ID not found in URL');
      }
  
      const response = await fetch(`http://localhost:3001/products/${productId}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch product details. Status: ${response.status}`);
      }
  
      const product = await response.json();
  
      // Update your ProductDetail.html content with product details
      const productDetailContainer = document.getElementById('productDetailContainer');
      productDetailContainer.innerHTML = `
        <div>
          <img src="${product.image}" alt="${product.title}">
          <h3>${product.title}</h3>
          <p>${product.description}</p>
          <p>Price: $${product.amount}</p>
          <button id="addToFavoritesBtn">Add to Favorites</button>
          <button id="buyNowBtn">Buy Now</button>
          <button id="addToBasketBtn">Add to Basket</button>
        </div>
      `;
  
      // Add event listeners for your buttons
      const addToFavoritesBtn = document.getElementById('addToFavoritesBtn');
      const buyNowBtn = document.getElementById('buyNowBtn');
      const addToBasketBtn = document.getElementById('addToBasketBtn');
  
      addToFavoritesBtn.addEventListener('click', () => {
        // Add logic for adding to favorites
        console.log('Added to Favorites');
      });
  
      buyNowBtn.addEventListener('click', () => {
        // Add logic for Buy Now action
        console.log('Buy Now clicked');
      });
  
      addToBasketBtn.addEventListener('click', () => {
        // Add logic for adding to basket
        console.log('Added to Basket');
      });
    } catch (error) {
      console.error('Error fetching or displaying product details:', error.message);
    }
  });
  