import React from 'react';
import Navbar from './Navbar';
import food1 from '../assets/food1.jpg';
import food2 from '../assets/food2.jpg';
import food3 from '../assets/food3.jpg';
import b1 from '../assets/b1.jpg';
import b2 from '../assets/b2.jpg';
import b3 from '../assets/b3.jpg';
import b4 from '../assets/b4.jpg';
import Footer from './footer';
const About = () => {
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
          <img src={food2} class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>About Us</h5>
            <p>Enjoy mouth-watering dishes at our restaurant.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src={food1} class="d-block w-100" alt="..." />
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

    <div className="container mt-4">
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
            <h2 style={{ textAlign: "center" }}>About Us</h2>
            <p style={{ textAlign: "center" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, possimus?
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="container mt-4">
      <div className="row">
    
        {/* Right Div: Text */}
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div>
            <h2 style={{ textAlign: "center" }}>Our Vission & Mission</h2>
            <p style={{ textAlign: "center" }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus nisi nesciunt voluptas autem sint inventore debitis quas et saepe ipsa.
            </p>
          </div>
        </div>
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
      </div>
    </div>
    <Footer />
    </div>
  )
}

export default About
