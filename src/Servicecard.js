
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Servicecard=(props)=>{
    return(
        <div>
            <div className="d-block services  text-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                       
                        <FontAwesomeIcon icon={props.icon} />
                         
                  </div>
                  <div className="media-body">
                    <h3 className="heading">{props.title}</h3>
                    <p>{props.descrption}</p>
                    {/* <a href="#" className="btn-custom d-flex align-items-center justify-content-center"><span><FontAwesomeIcon icon={rightarrow} /></span><i className="sr-only">Read more</i></a> */}
                  </div>
                </div>   
        </div>
    )
}

export default Servicecard;

