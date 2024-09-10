import React from "react";
import Gallerycard from "./Gallerycard";
import image1 from "./images/pet sitting13.jpg"
import image2 from "./images/pet sitting14.jpg"
import image3 from "./images/pet sitting15.jpg"
import image4 from "./images/pet sitting16.jpg"
import image5 from "./images/pet sitting17.jpg"
import image6 from "./images/pet sitting18.jpg"
const Gallery = () => {
    const Gdata = [
        {
            title: "PERSIAN CAT",
            subtitle: "Cat"
        },
        {
            title: "POMERANIAN",
            subtitle: "Dog"
        },
        {
            title: "SPHYNX CAT",
            subtitle: "Cat"
        },
        {
            title: "BRITISH SHORTHAIR",
            subtitle: "Cat"
        },
        {
            title: "BEAGLE",
            subtitle: "Dog"
        },
        {
            title: "PUG",
            subtitle: "Dog"
        },
    ]
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 text-center  py-5"><h2 className="fs-1 fw-bold">Pets Gallery</h2></div>
                <div className="col-12 col-md-4">
                    <Gallerycard image={image1} title={Gdata[0].title} Subtitle={Gdata[0].subtitle} />
                </div>
                <div className="col-12 col-md-4">
                    <Gallerycard image={image2} title={Gdata[1].title} Subtitle={Gdata[1].subtitle} />
                </div>
                <div className="col-12 col-md-4">
                    <Gallerycard image={image3} title={Gdata[2].title} Subtitle={Gdata[2].subtitle} />
                </div>
                <div className="col-12 col-md-4">
                    <Gallerycard image={image4} title={Gdata[3].title} Subtitle={Gdata[3].subtitle} />
                </div>
                <div className="col-12 col-md-4">
                    <Gallerycard image={image5} title={Gdata[4].title} Subtitle={Gdata[4].subtitle} />
                </div>
                <div className="col-12 col-md-4">
                    <Gallerycard image={image6} title={Gdata[5].title} Subtitle={Gdata[5].subtitle} />
                </div>
            </div>
        </div>
    )
}

export default Gallery;