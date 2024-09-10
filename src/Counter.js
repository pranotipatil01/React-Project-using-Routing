import React from "react";
import Countercard from "./Countercard";

const Counter = () => {
    const Counterdata=[
    {
        no:"50",
        title:"Customer"
    },
    {
        no:"8,500",
        title:"Professionals"
    },
    {
        no:"20",
        title:"Product"
    },
    {
        no:"50",
        title:"Pets Hosted"
    },
]
    return (
        <div className="container-fluid counter ">
            <div className="row mx-0">
                <div className="col-12 col-md-3 p-3 ">
                 <Countercard no={Counterdata[0].no} title={Counterdata[0].title}/>
                </div>
                <div className="col-12 col-md-3 p-0 ">
                <Countercard no={Counterdata[1].no} title={Counterdata[1].title}/>
                </div>
                <div className="col-12 col-md-3 p-0 ">
                <Countercard no={Counterdata[2].no} title={Counterdata[2].title}/>
                </div>
                <div className="col-12 col-md-3 p-0 ">
                <Countercard no={Counterdata[3].no} title={Counterdata[3].title}/>
                </div>
            </div>
        </div>
    )
}

export default Counter;