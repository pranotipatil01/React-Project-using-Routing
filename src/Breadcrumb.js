

import { Link } from "react-router-dom"
const Breadcrumb = (props) => {
  return (
    <div className="container-fluid path ">
<div className="row">
    <div className="col-12 text-center image-container">
     
   
    </div>
    <div className="content">
    <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item fs-2 fw-bold "><Link to="/{props.prevp}" className=" text-white text-decoration-none">{props.prevp}</Link></li>
              <li className="breadcrumb-item active fs-2 fw-bold text-white" aria-current="page">{props.activep}</li>
              
            </ol>
           
          </nav>
         <h5 className="card-title fs-1 fw-bolder text-white">{props.activep}</h5>
    </div>
    

</div>
</div>
  )
}

export default Breadcrumb;

