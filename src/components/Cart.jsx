import React, { useState, useEffect } from "react";
import Navbar from './Navbar';
import Footer from './footer';

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
    paymentMethod: "Cash on Delivery",
  });

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const placeOrder = () => {
    if (!form.name || !form.address || !form.phone) {
      alert("Please fill in all details before placing the order.");
      return;
    }
    alert(`Order placed successfully! 🎉\n\nName: ${form.name}\nAddress: ${form.address}\nPhone: ${form.phone}\nPayment: ${form.paymentMethod}`);
    setForm({ name: "", address: "", phone: "", paymentMethod: "Cash on Delivery" });
    setCart([]);
    localStorage.removeItem("cart");
  };
  const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <h2 style={{textAlign:"center"}}>Your Cart </h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="row" style={{ margin: "10px 80px" }}>
            {cart.map((item, index) => (
              <div className="col-md-4" key={index}>
                <div className="card h-100">
                  <img src={item.image} className="card-img-top" alt={item.name} />
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <h4 className="card-title">{item.name}</h4>
                      <h5>Rs.{item.price}</h5>
                    </div>
                    <p className="card-text">{item.description}</p>
                    <button className="btn btn-danger" onClick={() => removeFromCart(index)}>Remove</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {cart.length > 0 && (
        <div className="container mt-4">
          <h4 style={{ textAlign: "center" }}>Total Amount: Rs.{totalAmount}</h4>
        </div>
      )}

      {/* Order Form */}
      {cart.length > 0 && (
        <div className="container mt-4 mb-4">
          <h3 style={{textAlign:"center"}}>Enter Delivery Details</h3>
          <form className="border p-4 rounded shadow" style={{margin: "10px 80px" }}>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input type="text" className="form-control" name="name" value={form.name} onChange={handleChange} required />
            </div>

            <div className="mb-3">
              <label className="form-label">Address</label>
              <textarea className="form-control" name="address" value={form.address} onChange={handleChange} required />
            </div>

            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <input type="tel" className="form-control" name="phone" value={form.phone} onChange={handleChange} required />
            </div>

            <div className="mb-3">
              <label className="form-label">Payment Method</label>
              <select className="form-select" name="paymentMethod" value={form.paymentMethod} onChange={handleChange}>
                <option value="Cash on Delivery">Cash on Delivery</option>
                <option value="Credit/Debit Card">Credit/Debit Card</option>
                <option value="UPI">UPI</option>
              </select>
            </div>

            <button type="button" className="btn btn-success w-100" onClick={placeOrder}>Place Order</button>
          </form>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Cart;
