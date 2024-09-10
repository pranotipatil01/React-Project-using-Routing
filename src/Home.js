import React from "react";
import About from "./About";
import Services from "./Services";
import Gallery from "./Gallery";
import Pricing from "./Pricing";
import Blog from "./Blog";
import Contact from "./Contact";
import image from "./images/pet sitting01.jpg"

import Counter from "./Counter";
import Faq from "./Faq";
import Client from "./Client";


const Home = () => {
    return (
        <div className="container-fluid ">
            <div className="row p-0">
                <div className="col-12 p-0 ">
                    <div className="card text-bg-dark border border-0">
                        <img src={image} className="card-img img-fluid" alt="image not found" />
                        <div className="card-img-overlay text-center">
                            <h2 >
                                Highest Quality Care For Pets You'll Love
                            </h2>
                            <button>LEARN MORE</button>
                        </div>
                    </div>
                </div>
            </div>
            <Services />
            <About />
            <Counter />
            <Faq />
            <Client />
            <Pricing />
            <Gallery />
            <Blog />
            <Contact />
        </div>
    )
}

export default Home;