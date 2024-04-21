import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className="py-3 my-4" style={{color:"white"}}>
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item"><Link to="/" className="nav-link px-2 text-light">Home</Link></li>
      <li className="nav-item"><Link to="/" className="nav-link px-2 text-light">Features</Link></li>
      <li className="nav-item"><Link to="/" className="nav-link px-2 text-light">Pricing</Link></li>
      <li className="nav-item"><Link to="/" className="nav-link px-2 text-light">FAQs</Link></li>
      <li className="nav-item"><Link to="/" className="nav-link px-2 text-light">About</Link></li>
    </ul>
    <p className="text-center text-light">© 2023 FoodAdda, Inc</p>
  </footer>
    </>
  )
}

export default Footer
