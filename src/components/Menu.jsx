import React from 'react'
import Navbar from './Navbar'
import './Menu.css';
import burger from '../assets/Burger.jpeg';
import coldcofee from '../assets/coldcoffee.jpeg';
import dessert from '../assets/dessert.jpeg';
import pizza from '../assets/Pizza.jpeg';
import meals from '../assets/SouthIndian.jpeg';
import foody from '../assets/foody.jpg';
import Footer from './footer';

const Menu = () => {
     const products = [
        { id: 1, name: "Burger", description: "Delicious burger", image: burger, price:445 },
        { id: 2, name: "Cold Coffee", description: "Refreshing cold coffee", image: coldcofee, price:299 },
        { id: 3, name: "Dessert", description: "Sweet and tasty dessert", image: dessert, price:245 },
        { id: 4, name: "Pizza", description: "Cheesy pizza", image: pizza, price:645 },
        { id: 5, name: "Meal", description: "Traditional South meal", image: meals, price:200 },
        { id: 6, name: "Burger", description: "Delicious burger", image: burger, price:445 },
        { id: 7, name: "Cold Coffee", description: "Refreshing cold coffee", image: coldcofee, price:299 },
        { id: 8, name: "Food", description:"Delicious food for lunch", image: foody, price:500},
        { id: 9, name: "Pizza", description: "Cheesy pizza", image: pizza, price:645 },
        { id: 10, name: "Meal", description: "Traditional South meal", image: meals, price:200 },
        { id: 11, name: "Food", description:"Delicious food for lunch", image: foody, price:500},
        { id: 12, name: "Dessert", description: "Sweet and tasty dessert", image: dessert, price:245 }
      ];
  return (
    <div>
      <Navbar />
      <h1 class='bf'>BiteBlizz Spl BreakFast</h1>
      {/* <div class="card bg-dark text-white">
  <img src={bf1} class="card-img" alt="..." />
</div> */}
<div id='cards'>
    <div class="row row-cols-1 row-cols-md-6 g-4 mt-4">
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
    <h1 className='bf'>BiteBlizz Spl Lunch</h1>
    {/* <div class="card bg-dark text-white">
  <img src={bf1} class="card-img" alt="..." />
</div> */}
<div id='cards'>
    <div class="row row-cols-1 row-cols-md-6 g-4 mt-4">
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
    <h1 className='bf'>BiteBlizz Spl Dinner</h1>
    {/* <div class="card bg-dark text-white">
  <img src={bf1} class="card-img" alt="..." />
</div> */}
<div id='cards'>
    <div class="row row-cols-1 row-cols-md-6 g-4 mt-4">
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
    <Footer />
    </div>
  )
}

export default Menu
