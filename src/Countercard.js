import React from "react";

const Countercard = (props) => {
    return (


        <div className="card border-0 no ">
            <div className="card-body text-center ccontent p-0">
                <h3 className="card-title fs-3 fw-bold">{props.no}</h3>
                <p className="card-text fs-3">{props.title}</p>
                
            </div>
        </div>



    )
}

export default Countercard;