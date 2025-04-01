import React from 'react'
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light py-3">
  <div class="container-fluid">
    <a class="navbar-brand ms-3 fw-bold text-danger fs-3" href="#">BiteBlizz</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0 gap-4">
        <li class="nav-item">
          <Link class="nav-link" aria-current="page" to="/dashboard">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/about"> About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to='/menu'> Menu</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/cart"> Cart</Link>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-4" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
