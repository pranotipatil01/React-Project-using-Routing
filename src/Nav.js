import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

import React from "react";
import { Link } from "react-router-dom"
const Nav = () => {
  return (
    <div className="container-fluid ">

      <div className="row p-0">
        <div className="col-12">
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <Link to='/Home' className="navbar-brand " ><h2 className="fw-bold fs-1"><FontAwesomeIcon icon={faPaw} className='brand'/> Pet Sitting</h2></Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-xl-5">
                  <li className="nav-item">
                    {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                    <Link to='/Home' className="nav-link active   fs-4">Home</Link>
                  </li>
                  <li className="nav-item">
                    {/* <a className="nav-link" href="#">Features</a> */}
                    <Link to='/About' className="nav-link   fs-4">About</Link>
                  </li>
                  <li className="nav-item">
                    {/* <a className="nav-link" href="#">Pricing</a> */}
                    <Link to='/Veterinarian' className="nav-link   fs-4">Veterinarian</Link>
                  </li>
                  <li className="nav-item">
                    {/* <a className="nav-link" href="#">Pricing</a> */}
                    <Link to='/Services' className="nav-link   fs-4">Services</Link>
                  </li>
                  <li className="nav-item">
                    {/* <a className="nav-link" href="#">Pricing</a> */}
                    <Link to='/Gallery' className="nav-link   fs-4">Gallery</Link>
                  </li>
                  <li className="nav-item">
                    {/* <a className="nav-link" href="#">Pricing</a> */}
                    <Link to='/Pricing' className="nav-link   fs-4">Pricing</Link>
                  </li>
                  <li className="nav-item">
                    {/* <a className="nav-link" href="#">Pricing</a> */}
                    <Link to='/Blog' className="nav-link   fs-4">Blog</Link>
                  </li>
                  <li className="nav-item">
                    {/* <a className="nav-link" href="#">Pricing</a> */}
                    <Link to='/Contact' className="nav-link   fs-4">Contact</Link>
                  </li>

                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Nav;