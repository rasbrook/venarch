import { Link } from "react-router-dom"

function Lonk(){
    return(
    <div className="links">
        <Link to='/'>home</Link>
        <Link to='/about'>About</Link>
        <Link to='/Project'>Project</Link>
        <Link to='/contact'>Contact</Link>

    </div>)
}


export default Lonk