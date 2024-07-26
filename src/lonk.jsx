import { Link } from "react-router-dom"
import gsap from 'gsap'
import { useEffect, useRef } from "react"

function Lonk(){
    const refer=useRef()
    useEffect(()=>{
        const r=refer.current
        r.addEventListener('mouseenter', ()=>{
            gsap.to('.l', {
                scale:1.2,
                color:'#00bbff',
                

            })
        })
        r.addEventListener('mouseleave', ()=>{
            gsap.to('.l', {
                scale:1,
                color:'inherit',
                

            })
        })
    })
    





    return(
    <div ref={refer} className="links">
        <Link className="l" to='/'>Home</Link>
        <Link className="l" to='/about'>About</Link>
        <Link className="l" to='/Project'>Project</Link>
        <Link className="l" to='/contact'>Contact</Link>

    </div>)
}


export default Lonk