import React from "react";

const Gallerycard = (props) => {
  return (
    <div className="card text-bg-dark mb-3 gcard ">
      <img src={props.image} className="card-img img-fluid" alt="..." />
      <div className="card-img-overlay">
        <h5 className="card-title fs-4 fw-bold">{props.title}</h5>
        <p className="card-text fs-6 fw-bold">{props.Subtitle}</p>
      </div>
    </div>
  )
}

export default Gallerycard;