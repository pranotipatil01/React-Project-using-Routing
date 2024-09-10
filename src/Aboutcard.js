import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Aboutcard = (props) => {
  return (
    <div className="card my-3 border-0" >
      <div className="row g-0">
        <div className="col-md-4  text-center">
          {/* <img src={image} className="img-fluid rounded-circle" alt="..."/> */}
          <FontAwesomeIcon className=" fs-1 icon1" icon={props.icon} />

        </div>
        <div className="col-md-8">
          <div className="card-body acard">
            <h4 className="card-title">{props.title}</h4>
            <p className="card-text">{props.description}</p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutcard;