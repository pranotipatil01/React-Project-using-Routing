import React from "react";
const Pricingcard=(props)=>{
    return(
        
        <div className="card mt-5 mb-5 rounded" >
        <img src={props.image} className="card-img-top" alt="..."/>
        <div className="card-body text-center">
          <p className="card-title fs-4">{props.title}</p>
          <h3 className="card-text fs-1"><sup>$</sup> {props.price}<sub>/mos</sub></h3>
        </div>
        <ul className="list-group list-group-flush text-center">
          <li className="list-group-item fs-5 bg-light">{props.list1}</li>
          <li className="list-group-item fs-5">{props.list2}</li>
          <li className="list-group-item fs-5 bg-light">{props.list3}</li>
          <li className="list-group-item fs-5">{props.list4}</li>
        </ul>
        <div className="text-center ">
          <button className="rounded"><a href="#" className="card-link text-white text-decoration-none">GET STARTED</a></button>
         
        </div>
      </div>
    )
}

export default Pricingcard;