import React from "react";
import Pricingcard from "./Pricingcard";
import image1 from "./images/pet sitting10.jpg"
import image2 from "./images/pet sitting11.jpg"
import image3 from "./images/pet sitting12.jpg"

const Pricing=()=>{
    const  Pdata=[
        {
            title:"PERSONAL",
            price: "49",
            list1:" 5 Dogs Walk",
            list2:" 3 Vet visit",
            list3:" 3 Pet Spa",
            list4:" free supports"
        },
        {
            title:"BUSINESS",
            price: "79",
            // list1:" 5 Dogs Walk",
            // list2:" 3 Vet visit",
            // list3:" 3 Pet Spa",
            // list4:" free supports"
        },
        {
            title:"ULTIMATE",
            price: "109",
            // list1:" 5 Dogs Walk",
            // list2:" 3 Vet visit",
            // list3:" 3 Pet Spa",
            // list4:" free supports"
        },
    ]
    return(
        <div className="container-fluid">
        <div className="row">
            <div className="col-12 fs-1 fw-bold text-center py-5 mt-5">Affordable Packages</div>
            <div className="col-12 col-md-4">
                <Pricingcard image={image1} title={Pdata[0].title} price={Pdata[0].price} list1={Pdata[0].list1} list2={Pdata[0].list2}  list3={Pdata[0].list3} />
                
            </div>
            <div className="col-12 col-md-4">
                <Pricingcard  image={image2} title={Pdata[1].title} price={Pdata[1].price} list1={Pdata[0].list1} list2={Pdata[0].list2}  list3={Pdata[0].list3}/>
                
            </div>
            <div className="col-12 col-md-4">
                <Pricingcard image={image3}  title={Pdata[2].title} price={Pdata[2].price} list1={Pdata[0].list1} list2={Pdata[0].list2}  list3={Pdata[0].list3}/>
                
            </div>
        </div>
    </div>
    )
}

export default Pricing;