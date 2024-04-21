import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <a className="navbar-brand fs-3 fst-italic" href="/">FoodAdda</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link text-light" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/signup">SignUp</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/login">Login</Link>
              </li>
            </ul>
          </div>
          <form className="d-flex">
            <input className="form-control me-2 bg-light text-light" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-success text-light" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </>
  )
}

export default Navbar
