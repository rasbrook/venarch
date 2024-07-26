import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'



function Fotter(){
    





    return(<div  style={{display:'flex', flexWrap:'wrap',backgroundColor:'#868585', margin:0}}>
       <div  style={{width:'30%', margin:'1.5%', minWidth:250}}>
            <h1>venarch</h1>
            <h3>Consulting Architects And Engineers</h3>
            <p style={{textAlign:'justify'}}>Welcome to Venarch Consultancy! We’re a boutique architectural firm passionate about 
                sustainable design, urban revitalization, and creating spaces that inspire. Whether 
                it’s transforming historic landmarks or envisioning cutting-edge commercial complexes,
                 our team brings creativity and precision to every project. </p>

       </div>

       <div  style={{width:'30%', margin:'1.5%', minWidth:250, display:'flex'}}>
        <motion.h3 initial={{color:'inherit', scale:1}} whileHover={{color:'#00bbff',scale:1.2}} transition={{duration:0.5}}>
        <Link to='/' 
                    style={{margin:'2vw', fontSize:'1.3em',textDecoration:'none', color:'inherit',}}
        >Home</Link>
        </motion.h3>
       <motion.h3 initial={{color:'inherit', scale:1}} whileHover={{color:'#00bbff',scale:1.2}} transition={{duration:0.5}}>
       <Link to='/about'
                    style={{margin:'2vw', fontSize:'1.3em',textDecoration:'none', color:'inherit'}}
        >About</Link>
       </motion.h3>
       <motion.h3 initial={{color:'inherit', scale:1}} whileHover={{color:'#00bbff',scale:1.2}} transition={{duration:0.5}}>
       <Link to='/project' 
                    style={{margin:'2vw', fontSize:'1.3em',textDecoration:'none', color:'inherit'}}
        >Project</Link>
       </motion.h3>
       
        <motion.h3 initial={{color:'inherit', scale:1}} whileHover={{color:'#00bbff',scale:1.2}} transition={{duration:0.5}}>
        <Link to='/contact' 
                    style={{margin:'2vw',fontSize:'1.3em',textDecoration:'none', color:'inherit'}}
        >Contact</Link>
        </motion.h3>
        
       
        
       </div>
       
       <div style={{width:'30%', margin:'1.5%', minWidth:250, placeContent:'center'}}>
            
            <h2 style={{textAlign:'center', fontSize:'32px'}}>Contact Detail</h2>
            <h3 style={{textAlign:'center'}}>Phone No: <motion.a 
            target='_blank'
            initial={{color:'inherit'}}
            whileHover={{color:'#00bbff'}}
            style={{color:'inherit', textDecoration:'none'}}
             href='tel:+251977313131'>0977313131</motion.a></h3>


            <h3 style={{textAlign:'center'}}>Email: <motion.a
            target='_blank'
            initial={{color:'inherit'}}
            whileHover={{color:'#00bbff'}}
            style={{color:'inherit', textDecoration:'none'}}
            >info@venarch.com</motion.a></h3>


            <h3 style={{textAlign:'center'}}>Location: <motion.a 
            target='_blank'
            style={{color:'inherit', textDecoration:'none'}}
            initial={{color:'inherit'}}
            whileHover={{color:'#00bbff'}}
            href='https://www.google.com/maps/place/No1+Fitness+and+Spa/@9.0060768,38.8661763,19.18z/data=!4m14!1m7!3m6!1s0x164b9ba55c587743:0xb7b4b5347808fcd3!2sSemit+72!8m2!3d9.0015989!4d38.867711!16s%2Fg%2F11sq7t46x9!3m5!1s0x164b85bf6c771247:0xebcee2f0668780ea!8m2!3d9.0064667!4d38.8665151!16s%2Fg%2F11vw_cb8js?entry=ttu'>Semit 72</motion.a></h3>
            
            
            
       </div>
       <nav style={{width:'100%', minHeight:50, alignItems:'center', backgroundColor:'#000', display:'flex'}}>
        <p style={{textAlign:'center',color:'#fff', marginLeft:'10vw', marginRight:'5vw', fontSize:'0.9em'}}> © 2024 venarch All Rights Reserved</p>
        <a href='https://bsquaresoftwaresolution.netlify.app/' target='_black' style={{textAlign:'center',color:'#fff', marginLeft:'5vw', fontSize:'0.9em', cursor:'pointer', textDecoration:'none'}}>Design and Develop by B Square software solution</a>
       </nav>
       
        

    </div>)
}




export default Fotter


