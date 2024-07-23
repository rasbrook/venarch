function Leftc(props){
    return(
    <div className="leftc">
       
            <img src={props.image} />
        
        <div>
        <h2>
            {props.header}
            </h2>
            <p>
            {props.content}
            </p>
            <a href={props.linkto}>Learn more  + </a>
        </div>
            

    </div>
)

}



export default Leftc