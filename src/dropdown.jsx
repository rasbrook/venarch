import {motion} from 'framer-motion'
import { useAnimationControls } from 'framer-motion'
import { Link } from 'react-router-dom'






function Dropdown(){
    const slide=useAnimationControls()
    function slider(){
        slide.start('final')
    }
    function back(){
        slide.start('back')
    }



    return(
    <motion.div className='drop' style={{position:'relative', top:-40}}>
        <motion.svg onClick={slider} style={{position:'absolute', top:20}} fill="#000" width="30px" height="30px" viewBox="0 0 32 32" version="1.1" id='bar' xmlns="http://www.w3.org/2000/svg">
<path d="M2 8.749h28c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0h-28c-0.414 0-0.75 0.336-0.75 0.75s0.336 
0.75 0.75 0.75v0zM30 15.25h-28c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h28c0.414 0 0.75-0.336 
0.75-0.75s-0.336-0.75-0.75-0.75v0zM30 23.25h-28c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h28c0.414
 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0z"></path>
</motion.svg>
        <motion.div  style={{placeContent:'center', 
        zIndex:100, width:" 99vw",position:'absolute',
        left: -1000,backgroundColor: '#3d708f80',backdropFilter:"blur(7em)"}}
        variants={{
            init:{
        
        },
            final:{
                left:-10

            },
            back:{
                left:-1100

            }
        }} initial='init' animate={slide} transition={{duration:1}}>

<motion.svg onClick={back} width="40px" height="40px" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <title>cancel</title>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="work-case" fill="#000000" transform="translate(91.520000, 91.520000)">
            <polygon id="Close" points="328.96 30.2933333 298.666667 1.42108547e-14 164.48 134.4 30.2933333 1.42108547e-14 1.42108547e-14 30.2933333 134.4 164.48 1.42108547e-14 298.666667 30.2933333 328.96 164.48 194.56 298.666667 328.96 328.96 298.666667 194.56 164.48">

</polygon>
        </g>
    </g>
</motion.svg>
        <br /><br />
        <div style={{ margin: 65,marginLeft: 150}}><Link to='/'  style={{fontsize:"35px", color:'inherit', textDecoration:'none'}}>home</Link></div>
        <div style={{ margin: 65,marginLeft: 150}}><Link to='/about' style={{fontsize:"35px", color:'inherit', textDecoration:'none'}}>About</Link></div>
        <div style={{ margin: 65,marginLeft: 150}}><Link to='/Project' style={{fontsize:"35px", color:'inherit', textDecoration:'none'}}>Project</Link></div>
        <div style={{ margin: 65,marginLeft: 150}}><Link to='/contact' style={{fontsize:"35px", color:'inherit', textDecoration:'none'}}>Contact</Link></div>
        
        
        
        
        
        </motion.div>

        

        
        
        
        
        
    </motion.div>)
}




export default Dropdown