// HomePage.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserDetails } from '../actions/userActions';
import { Link } from 'react-router-dom';
import ProductList from './ProductList'; // Import the ProductList component

const HomePage = () => {
  const userDetails = useSelector((state) => state.userDetails);
  const { user } = userDetails;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserDetails());
  }, [dispatch]);

  return (
    <div className="homepage">
      <h1>Welcome {user && user.name}!</h1>
      <p>You are logged in.</p>
      <Link to="/profile">Go to Profile</Link>
      <Link to="/logout">Logout</Link>

      {/* Render the ProductList component */}
      <ProductList />
    </div>
  );
};

export default HomePage;
