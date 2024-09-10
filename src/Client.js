import React from "react";
import Clientcard from "./Clientcard";

import image1 from './images/pet sitting08.jpg';
import image2 from './images/pet sitting09.jpg';




const Client = () => {

    const clientd = [
        {
            name: "John Doe",
            designation: "Marketing Manger",
            review: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. "
        },
        {
            name: "John Doe",
            designation: "Marketing Manger",
            review: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. "
        },
        {
            name: "John Doe",
            designation: "Marketing Manger",
            review: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. "
        }
    ]
    return (
        <div className="container-fluid client p-0 mt-5">
            <div className="row">
                <div className="col-12 text-center p-md-5">
                    <h2 className="fw-bold fs-1">Happy Clients & Feedbacks</h2>
                </div>
                <div className="col-12 col-md-4 p-md-5">
                    <Clientcard image={image1} name={clientd[0].name} designation={clientd[0].designation} review={clientd[0].review} />
                </div>
                <div className="col-12 col-md-4 p-md-5">
                    <Clientcard image={image2} name={clientd[0].name} designation={clientd[0].designation} review={clientd[0].review} />
                </div>
                <div className="col-12 col-md-4 p-md-5">
                    <Clientcard image={image1} name={clientd[0].name} designation={clientd[0].designation} review={clientd[0].review} />
                </div>

            </div>
        </div>
    )
}

export default Client;



