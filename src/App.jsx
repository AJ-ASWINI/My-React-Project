import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './components/auth'; // Import your main App component (for login/signup)
import Dashboard from './components/Dashboard'; // Import the Dashboard component
import Cart from './components/Cart';
import About from './components/About';
import Menu from './components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth/>} /> 
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/cart" element={<Cart />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/menu' element={<Menu />}/>
      </Routes>
      </Router>
  );
}

export default App;
