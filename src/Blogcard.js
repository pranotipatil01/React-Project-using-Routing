

const Blogcard = (props) => {
  return (
    <div className="card mb-3 bcard" >
      <img src={props.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-text p-2">{props.date}</p>
        <h5 className="card-text px-2 pb-2">{props.description}</h5>
      </div>
    </div>
  )
}
export default Blogcard