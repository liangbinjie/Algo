import { useState } from 'react'
import './App.css'
import logo from './assets/logo.png';

export default function Navbar() {
    return (
        <>
          <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid ms-3">
              <a className="navbar-brand" href="#"><img src={logo} alt="" /></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto me-3">
                  <li className="nav-item px-3">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li className="nav-item px-3">
                    <a className="nav-link" href="#">Sign In</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link signup px-3" href="#">Register</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </>
      );
};
