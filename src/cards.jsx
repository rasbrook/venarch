function Cards(props){
    return(
    <div className="cards">
        <a hred='./process.jpx'>
            <img src={props.cardimage} />
            <h1>{props.head}</h1>
            <p>{props.about}</p>
        </a>

    </div>)
}




export default Cards