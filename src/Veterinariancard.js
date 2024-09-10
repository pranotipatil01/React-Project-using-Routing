import React from "react";

const Veterinariancard = (props) => {
  return (
    <div className="card vcard mt-4" >
      <img src={props.image} className="card-img" alt="..." />
      <div className="card-img-overlay">
        {/* <h5 className="card-title"></h5> */}
      </div>
      <div className="card-body text-center">
        <h5 className="card-title fs-3 fw-bold">{props.name}</h5>
        <p className="card-text fs-4">{props.designation}</p>
        <p className="card-text fs-5">{props.review}</p>
      </div>
    </div>
  )
}

export default Veterinariancard;















