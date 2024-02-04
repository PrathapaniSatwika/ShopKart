import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listCartItems } from '../actions/cartActions';
import { Link } from 'react-router-dom';
import { deleteCartItem } from '../actions/cartActions';

const CartPage = (props) => {
  const dispatch = useDispatch();
  const cartDetails = useSelector((state) => state.cartDetails);
  const { cartItems } = cartDetails;

  useEffect(() => {
    dispatch(listCartItems());
  }, [dispatch]);

  const handleDeleteCartItem = (productId) => {
    dispatch(deleteCartItem(productId));
  };

  const checkoutHandler = () => {
    props.history.push('/placeorder');
  };
  
  return (
    <div className="cart-page">
      <div className="cart-container">
        <h1>Shopkart</h1>
        <ul className="cart-list">
          {cartItems.map((item) => (
            <li key={item.product}>
              <div className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-item-info">
                  <Link to={`/product/${item.product}`}>{item.name}</Link>
                  <p>${item.price}</p>
                  <p>Quantity: {item.qty}</p>
                  <button onClick={() => handleDeleteCartItem(item.product)}>
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="cart-sidebar">
        <h2>Price Details</h2>
        <ul className="cart-price-details">
          <li>
            <span>Price</span>
            <span>${cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)}</span>
          </li>
          <li>
            <span>Discount Price</span>
            <span>${cartItems.reduce((acc, item) => acc + item.discountPrice * item.qty, 0)}</span>
          </li>
          <li>
            <span>Delivery Charge</span>
            <span>${50}</span>
          </li>
          <li className="cart-price-total">
            <span>Total</span>
            <span>${cartItems.reduce((acc, item) => acc + item.discountPrice * item.qty, 0) + 50}</span>
          </li>
        </ul>
        <button onClick={checkoutHandler}>PLACE ORDER</button>
      </div>
    </div>
  );
};

export default CartPage;
