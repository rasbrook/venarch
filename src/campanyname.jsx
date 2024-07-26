import logo from './assets/logo.png';
import {motion} from 'framer-motion'



function Camp(){
    return(
    <motion.div  className='camp'
    initial={{position:'relative', 
        bottom:50,
        left:-50,
        opacity:0
        


    }}
    whileInView={{position:'relative', bottom:0, opacity:1,left:0}}
    transition={{duration:1}}


    
     
     >
        <img src={logo}></img>
        <h1>venarch consultancy</h1>

    </motion.div>)
}



export default Camp