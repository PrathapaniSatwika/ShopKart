import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your authentication logic here
    console.log('Logging in with:', { email, password });
    // Redirect to home page after successful login
    history.push('/');
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
// Login.js

function handleLogin(event) {
    event.preventDefault(); // Prevent the default form submission
  
    // Get the values from the form fields
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const loginSuccessful = true;
  
    if (loginSuccessful) {
      // Redirect to the homepage or any other desired page
      window.location.href = 'HomePage.html';
    } else {
      // Handle login failure (display an error message, etc.)
      alert('Login failed. Please check your credentials.');
    }
  }
  