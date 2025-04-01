import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Auth.css';

function Auth() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);  // Toggle between Sign Up and Sign In
  const navigate = useNavigate();

  // Sign Up Function: Save username and password to localStorage
  const handleSignUp = (e) => {
    e.preventDefault();
    if (username && password) {
      // Get existing users from localStorage, or initialize as empty array
      const users = JSON.parse(localStorage.getItem('users')) || [];
      
      // Check if username already exists
      const userExists = users.some(user => user.username === username);
      if (userExists) {
        setError('Username already exists.');
      } else {
        // Save the new user
        const newUser = { username, password };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users)); // Store updated users
        setError('');
        alert('Sign Up Successful');
        setUsername('');
        setPassword('');
        setIsSignUp(false); // Switch to Sign In
        navigate("/dashboard");
      }
    } else {
      setError('Please enter both username and password.');
    }
  };

  // Sign In Function: Check username and password against localStorage
  const handleSignIn = (e) => {
    e.preventDefault();
    if (username && password) {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const user = users.find(user => user.username === username && user.password === password);
      
      if (user) {
        setLoggedIn(true);
        setError('');
        alert('Sign In Successful');
        navigate("/dashboard");
      } else {
        setError('Invalid username or password.');
      }
    } else {
      setError('Please enter both username and password.');
    }
  };

  return (
    <div id="container">

      <div className="half left">
       
      </div>
      <div className="half right">
      <h1 id="heading">{isSignUp ? 'Sign Up' : 'Sign In'}</h1>
      
      {/* Toggle between Sign Up and Sign In */}
      <button id="button" onClick={() => setIsSignUp(!isSignUp)}>
        {isSignUp ? 'Already have an account? Sign In' : 'Create an account. Sign Up'}
      </button>

      <form onSubmit={isSignUp ? handleSignUp : handleSignIn}>
        <input
          className="input"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button id="button" type="submit">{isSignUp ? 'Sign Up' : 'Sign In'}</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </div>
  );
}

export default Auth;
