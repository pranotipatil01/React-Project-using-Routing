import React from "react";

import axios from 'axios';
import { useState } from 'react';
const Contact = () => {
  const[option,setOption]=useState();
  const[name,setName]=useState();
  const[lastname,setLastName]=useState();
  const[date,setDate]=useState();
  const[time,setTime]=useState();
  const[message,setMessage]=useState();
 

const GetOption=(event)=>{
 setOption(event.target.value);
}
  const GetName=(event)=>{
    setName(event.target.value)
  }
  const GetLastname=(event)=>{
    setLastName(event.target.value)
  }
  const GetDate=(event)=>{
    setDate(event.target.value)
  }
  const GetTime=(event)=>{
    setTime(event.target.value)
  }

  const GetMessage=(event)=> {
    setMessage(event.target.value)
  }

  const SendData=()=>{
    axios.post("https://660ce7fe3a0766e85dbee6e2.mockapi.io/petsitting",
    {name,lastname,date,time,message,option}
    ).then((data)=>{
      console.log(data);
    }).catch((res)=>{
      console.log(res);
  });
}
  return (
    <div className="container-fluid contact my-5 ">
      <div className="row">
        <div className="col-12 col-md-6">
          {/* <img src="" alt="" className="img-fluid"></img> */}
        </div>
        <div className="col-12 col-md-6">
          <form className="row g-1 my-5" novalidate>

            <div className="col-12">
              <h2 className="fs-1 fw-bold py-5">Free Consultation</h2>

              <select className="form-select py-3" onchange={GetOption} aria-label="Default select example">
                <option selected disabled>Select Serives</option>
                <option value="1">Cat Sittig</option>
                <option value="2">Dog Walk</option>
                <option value="3">Pet Spa</option>
                <option value="4">Pet Grooming</option>
                <option value="5">Pet Daycare</option>
              </select>
              <div className="row my-3">
                <div className="col">
                  <input type="text" onChange={GetName} className="form-control  py-3" placeholder="First name" aria-label="First name" />
                </div>
                <div className="col">
                  <input type="text" onChange={GetLastname} className="form-control  py-3" placeholder="Last name" aria-label="Last name" />
                </div>
              </div>
              <div className="row my-3">
                <div className="col">
                  <input type="date" onChange={GetDate} className="form-control  py-3" placeholder="Date" value="" />
                </div>
                <div className="col">
                  <input type="time" onChange={GetTime} placeholder="Time" className="form-control  py-3" />
                </div>
                <div className="col-12 my-3"><textarea className="form-control  py-3" onChange={GetMessage} placeholder="Message" rows="4" cols="50"></textarea></div>
              </div>

              <button className="btn btn-primary form-control  py-3" type="button" onClick={SendData}>Submit form</button>
            </div>
          </form>


        </div>
      </div>
    </div>


  )
}

export default Contact;