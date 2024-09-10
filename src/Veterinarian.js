import React from "react";
import Veterinariancard from "./Veterinariancard";
import image1 from './images/pet sitting1 (2).jpg'
import image2 from './images/pet sitting2 (2).jpg'
import image3 from './images/pet sitting3 (2).jpg'
import image4 from './images/pet sitting4 (2).jpg'
import image5 from './images/pet sitting5 (1).jpg'
import image6 from './images/pet sitting6 (1).jpg'
import image7 from './images/pet sitting7 (1).jpg'
import image8 from './images/pet sitting8 (1).jpg'
const Veterinarian = () => {
    const vdata = [
        {
            name: "Lloyd Wilson",
            designation: "Health Coach",
            review: "I am an ambitious workaholic, but apart from that, pretty simple person."
        },
        {
            name: "Rachel Parker",
            designation: "Life & Business Coach",
            review: "I am an ambitious workaholic, but apart from that, pretty simple person."
        },
        {
            name: "Ian Smith",
            designation: "Executive Coach",
            review: "I am an ambitious workaholic, but apart from that, pretty simple person."
        },
        {
            name: "Alicia Henderson",
            designation: "Health Coach",
            review: "I am an ambitious workaholic, but apart from that, pretty simple person."
        },
        {
            name: "Lloyd Wilson",
            designation: "Executive Coach",
            review: "I am an ambitious workaholic, but apart from that, pretty simple person."
        },
        {
            name: "Rachel Parker",
            designation: "Health Coach",
            review: "I am an ambitious workaholic, but apart from that, pretty simple person."
        },
        {
            name: "Ian Smith",
            designation: "Health Coach",
            review: "I am an ambitious workaholic, but apart from that, pretty simple person."
        },
        {
            name: "Fred Henderson",
            designation: "Executive Coach",
            review: "I am an ambitious workaholic, but apart from that, pretty simple person."
        }
    ]
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-md-3 mb-4">
                    <Veterinariancard image={image1} name={vdata[0].name} designation={vdata[0].designation} review={vdata[0].review} />

                </div>
                <div className="col-12 col-md-3 mb-4">
                    <Veterinariancard image={image2} name={vdata[1].name} designation={vdata[1].designation} review={vdata[1].review} />

                </div>
                <div className="col-12 col-md-3 mb-4">
                    <Veterinariancard image={image3} name={vdata[2].name} designation={vdata[2].designation} review={vdata[2].review} />

                </div>
                <div className="col-12 col-md-3 mb-4">
                    <Veterinariancard image={image4} name={vdata[3].name} designation={vdata[3].designation} review={vdata[3].review} />

                </div>
                <div className="col-12 col-md-3 mb-4">
                    <Veterinariancard image={image5} name={vdata[4].name} designation={vdata[4].designation} review={vdata[4].review} />

                </div>
                <div className="col-12 col-md-3 mb-4">
                    <Veterinariancard image={image6} name={vdata[5].name} designation={vdata[5].designation} review={vdata[5].review} />

                </div>
                <div className="col-12 col-md-3 mb-4">
                    <Veterinariancard image={image7} name={vdata[6].name} designation={vdata[6].designation} review={vdata[6].review} />

                </div>
                <div className="col-12 col-md-3 mb-4">
                    <Veterinariancard image={image8} name={vdata[7].name} designation={vdata[7].designation} review={vdata[7].review} />

                </div>


            </div>
        </div>
    )
}

export default Veterinarian;