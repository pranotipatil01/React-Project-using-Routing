import React from "react";
import image from "./images/pet sitting02.jpg"
import Aboutcard from "./Aboutcard";

import { faStethoscope } from '@fortawesome/free-solid-svg-icons';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { faTruckMedical } from '@fortawesome/free-solid-svg-icons';



const About = () => {
    const adata = [{
        title: "Care Advices",
        description: "Far far away, behind the word mountains, far from the countries."
    },
    {
        title: "Customer Supports",
        description: "Far far away, behind the word mountains, far from the countries."
    },
    {
        title: "Emergency Services",
        description: "Far far away, behind the word mountains, far from the countries."
    },
    {
        title: "Veterinary Help",
        description: "Far far away, behind the word mountains, far from the countries."
    }
    ]
    return (
        <div className="container-fluid">
            <div className="row ">

                <div className="col-12 col-md-6 left p-0">
                    <img src={image} alt="image not found" className="img-fluid "></img>
                </div>
                <div className="col-12 col-md-6 right">
                    <h2>Why Choose us?</h2>
                    <div className="row m-0">
                        <div className="col-12 col-lg-6 my-lg-4  ">
                            <Aboutcard icon={faStethoscope} title={adata[0].title} description={adata[0].description} />
                        </div>
                        <div className="col-12 col-lg-6 my-lg-4 ">
                            <Aboutcard  icon={faHeadset} title={adata[1].title} description={adata[1].description} />
                        </div>
                        <div className="col-12 col-lg-6 my-lg-4 ">
                            <Aboutcard icon={faPhoneVolume} title={adata[2].title} description={adata[2].description} />
                        </div>
                        <div className="col-12 col-lg-6 my-lg-4">
                            <Aboutcard  icon={faTruckMedical} title={adata[3].title} description={adata[3].description} />
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default About;