function Rightc(props){
    return(
    <div className="rightc">
    <div  >
        <h2>
            {props.header}
        </h2>
        <p>
            {props.content}
        </p>
        <a href={props.linkto}>Learn more  + </a>
    </div>
        <img src={props.image} />

    </div>
)

}



export default Rightc