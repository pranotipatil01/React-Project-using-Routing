import React from "react";
import Blogcard from "./Blogcard";
import image1 from "./images/pet sitting21.jpg"
import image2 from './images/pet sitting19.jpg'
import image3 from "./images/pet sitting20.jpg"
const Blog = () => {
    const Bdata = [
        {
            date: "APRIL 06, 2024 ",
            description: "Even the all-powerful Pointing has no control about the blind texts"
        },
        {
            date: "APRIL 06, 2024 ",
            description: "Even the all-powerful Pointing has no control about the blind texts"
        },
        {
            date: "APRIL 06, 2024 ",
            description: "Even the all-powerful Pointing has no control about the blind texts"
        },
    ]
    return (
        <div className="container-fluid ">
            <div className="row">
                <div className="col-12 text-center">
                    <h2 className="fs-1 fw-bold py-5">Latest news from our blog</h2>
                </div>
                <div className="col-12 col-md-4">
                    <Blogcard image={image1} date={Bdata[0].date} description={Bdata[0].description} />
                </div>
                <div className="col-12 col-md-4">
                    <Blogcard image={image2} date={Bdata[0].date} description={Bdata[0].description} />
                </div>
                <div className="col-12 col-md-4">
                    <Blogcard image={image3} date={Bdata[0].date} description={Bdata[0].description} />
                </div>

            </div>
        </div>
    )
}

export default Blog;