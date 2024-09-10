import React from "react";
import image19 from "./images/pet sitting19.jpg"
import image20 from "./images/pet sitting20.jpg"
const Footer = () => {
  return (
    <div className="container-fluid mt-5 bg-dark text-white">
      <div className="row">
        <div className="col-12 col-md-3 py-4">
          <h2 className="fw-bold fs-3 py-4">Petsitting</h2>
          <p className="fs-5">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
        </div>
        <div className="col-12 col-md-3 py-4">
          <h2 className="fw-bold fs-3 py-4">Latest News</h2>
          <div className="card mb-3" >
            <div className="row g-0">
              <div className="col-md-4">
                <img src={image19} className="img-fluid rounded-start h-100" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <p className="card-text fs-6">Even the all-powerful Pointing has no control about</p>
                  <p className="card-text"><small className="text-body-secondary">April 7, 2020 Admin 19</small></p>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3" >
            <div className="row g-0">
              <div className="col-md-4">
                <img src={image20} className="img-fluid rounded-start h-100" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">

                  <p className="card-text fs-6">Even the all-powerful Pointing has no control about</p>
                  <p className="card-text"><small className="text-body-secondary">April 7, 2020 Admin 19</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3 py-4">
          <h2 className="fw-bold fs-3 py-4">Quick Links</h2>
          <ul className="fs-4" type="none">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Pricing</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="col-12 col-md-3 py-4">
          <h2 className="fw-bold fs-3 py-4">Have a Questions?</h2>
          <h6 className="fs-5"><span></span>	203 Fake St. Mountain View, San Francisco, California, USA</h6>
          <h6 className="fs-5"><span></span>	+2 392 3929 210</h6>
          <h6 className="fs-5"><span></span>	info@yourdomain.com</h6>
        </div>
      </div>
    </div>
  )
}

export default Footer;