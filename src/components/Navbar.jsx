import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">
        <a className="navbar-brand mx-auto" style={{ fontWeight: 900, fontSize: '20px' }} href="#">
          Siv..
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" href="#intro">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                Know Me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#project">
                Hall of Code
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">
                Superpowers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Reach Out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
