function Pro(props){
    return(
    <div className="proj">
        <img src={props.sorce} />
        <div>
        <h1>{props.title}</h1>
        <h3>LOCATION</h3>
        <p>{props.location}</p>
        <h3>STATUS</h3>
        <p>{props.status}</p>
        <h3>DESCRIPTION</h3>
        <p>{props.discrip}</p>
        </div>

    </div>)
}




export default Pro