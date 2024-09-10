import React from "react";
import Servicecard from "./Servicecard";


import { faDog } from '@fortawesome/free-solid-svg-icons';
import { faBone } from '@fortawesome/free-solid-svg-icons';
import { faScissors } from '@fortawesome/free-solid-svg-icons';


const Services=()=>{

const sdata=[{
    title:"Dog Walking",
    descrption:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right.",
},
{
    title:"Pet Daycare",
    descrption:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right.",
},
{
    title:"Pet Grooming",
    descrption:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right.",
}
]
    return(
        <div className="container-fluid serviceb">
        <div className="row ">

            <div className="col-12 col-md-4">
                <Servicecard icon={faDog} title={sdata[0].title}  descrption={sdata[0].descrption}/> 
                
            </div>
            <div className="col-12 col-md-4">
                <Servicecard icon={faBone} title={sdata[1].title}  descrption={sdata[1].descrption}/>
                
            </div>
            <div className="col-12 col-md-4">
                <Servicecard icon={faScissors } title={sdata[2].title}  descrption={sdata[2].descrption}/>
                
            </div>
        </div>
    </div>
    )
}

export default Services;