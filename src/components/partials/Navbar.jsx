import React from 'react'
import { Link, NavLink } from 'react-router'

const Navbar = () => {
  return (
    // <!-- Navbar Start -->
    <div className="container-fluid bg-secondary px-0 wow fadeIn" data-wow-delay="0.1s">
        <div className="nav-bar">
            <nav className="navbar navbar-expand-lg bg-primary navbar-dark px-4 py-lg-0">
                <h4 className="d-lg-none m-0">Menu</h4>
                <button type="button" className="navbar-toggler me-0" data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav me-auto">
                        <Link to="/" className="nav-item nav-link">Home</Link>
                        <Link to="/about" className="nav-item nav-link" >About</Link>
                        <Link to="/donation" className="nav-item nav-link">Donation</Link>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu bg-light m-0">
                                <Link to="/feature" className="dropdown-item">Feature</Link>
                                <Link to="/team" className="dropdown-item">Our Team</Link>
                                <Link to="/testimonial" className="dropdown-item">Testimonial</Link>
                            </div>
                        </div>
                        <Link to="/contact" className="nav-item nav-link">Contact</Link>
                    </div>
                    <div className="d-none d-lg-flex ms-auto">
                        <a className="btn btn-square btn-dark ms-2" href=""><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-square btn-dark ms-2" href=""><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-square btn-dark ms-2" href=""><i className="fab fa-youtube"></i></a>
                    </div>
                </div>
            </nav>
        </div>
    </div>
    // <!-- Navbar End -->
  )
}

export default Navbar
