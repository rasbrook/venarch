

function Leftabout(props){
    return(<div style={{display:'flex', flexWrap:'wrap', marginLeft:'4vw', marginRight:'4vw', marginBottom:'2vw', marginTop:'2vw'}}>
        <img src={props.sorce}  style={{minWidth:280, maxWidth:600, width:'30vw'}}/>
        <div style={{minWidth:280, maxWidth:600, width:'50vw', padding:30}}>
            <h1>{props.head}</h1>
            <p style={{fontSize:'1.5em', textAlign:'justify'}}>{props.con}</p>

        </div>


    </div>)
}




export default Leftabout 