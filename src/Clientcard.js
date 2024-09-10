

const Clientcard = (props) => {
    return (
        <div className="card clientc" >
            <div className="card-body">
                <p className="card-text">{props.review}</p>
                <div className="row">
                    <div className="col-3"><img src={props.image} alt="image not found" className="rounded-circle img-fluid"></img></div>
                    <div className="col-9">
                        <h3>{props.name}</h3>
                        <p>{props.designation}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Clientcard;