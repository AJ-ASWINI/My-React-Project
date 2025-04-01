import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import Navbar from './Navbar';
import Footer from './footer';
import food1 from '../assets/food1.jpg';
import food2 from '../assets/food2.jpg';
import food3 from '../assets/food3.jpg';
import burger from '../assets/Burger.jpeg';
import coldcofee from '../assets/coldcoffee.jpeg';
import dessert from '../assets/dessert.jpeg';
import pizza from '../assets/Pizza.jpeg';
import meals from '../assets/SouthIndian.jpeg';
import foody from '../assets/foody.jpg';
import b1 from '../assets/b1.jpg';
import b2 from '../assets/b2.jpg';
import b3 from '../assets/b3.jpg';
import b4 from '../assets/b4.jpg';

function Dashboard() {
  const [cart, setCart] = useState([]);

  useEffect(
    () => {
      const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
      setCart(savedCart);
    }, []
  );

  const addToCart = (item) => {
    const updatedCart = [...cart,item];
    setCart(updatedCart);
    localStorage.setItem("cart",JSON.stringify(updatedCart));
    alert('Item added to cart')
  };
  const products = [
    { id: 1, name: "Burger", description: "Delicious burger", image: burger, price:445 },
    { id: 2, name: "Cold Coffee", description: "Refreshing cold coffee", image: coldcofee, price:299 },
    { id: 3, name: "Dessert", description: "Sweet and tasty dessert", image: dessert, price:245 },
    { id: 4, name: "Pizza", description: "Cheesy and delicious pizza", image: pizza, price:645 },
    { id: 5, name: "South Indian Meal", description: "Traditional South Indian meal", image: meals, price:200 },
    { id: 6, name: "Food", description:"Delicious food for lunch", image: foody, price:500}
  ];
  return (
    <div>
      <Navbar />
      
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={food1} class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>Delicious Food</h5>
        <p>Enjoy mouth-watering dishes at our restaurant.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={food2} class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={food3} class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<h1 className='taste'>TASTE THE BITES</h1>
    <div id='cards'>
    <div class="row row-cols-1 row-cols-md-3 g-4">
      {products.map((item) => (
  <div class="col" key={item.id}>
    <div class="card h-100">
      <img src={item.image} class="card-img-top" alt="..." />
      <div class="card-body">
      <div className="d-flex justify-content-between">
        <h4 class="card-title">{item.name}</h4><h5>Rs.{item.price}</h5></div>
        <p class="card-text">{item.description}</p>
        <button type="button" onClick={() => addToCart(item)} class="btn btn-primary">Add to cart</button>{" "} <button type="button" class="btn btn-success">Buy</button>
      </div>
    </div>
  </div>
      ))}

  </div>
    </div>
    <h1 className='taste'>Today's Best Offer</h1>
    <div id='offer'>

    </div>

    <div className="container">
  <div className="row">
  
    <div className="col-md-6">
      <div className="row">
       
        <div className="col-md-6 col-sm-6 mb-3">
          <img src={b1} className="img-fluid" alt="Image 1" />
        </div>
        <div className="col-md-6 col-sm-6 mb-3">
          <img src={b2} className="img-fluid" alt="Image 2" />
        </div>
      </div>
      <div className="row">
       
        <div className="col-md-6 col-sm-6 mb-3">
        <img src={b3} className="img-fluid" alt="Image 3" />
        </div>
        <div className="col-md-6 col-sm-6 mb-3">
          <img src={b4} className="img-fluid" alt="Image 4" />
        </div>
      </div>
    </div>

    {/* Right Div: Text */}
    <div className="col-md-6 d-flex justify-content-center align-items-center">
      <div>
        <h2 style={{ textAlign: "center" }}>Hello, welcome to BiteBlizz!</h2>
        <p style={{ textAlign: "center" }}>
        This is the area where you can taste any type of food you'd like.
        </p>
      </div>
    </div>
  </div>
</div>

    <Footer />
    </div>
  );
}

export default Dashboard;
