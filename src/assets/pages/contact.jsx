import Lonk from "../../lonk"
import Dropdown from "../../dropdown"
import Camp from "../../campanyname"
import Mode from "../../mode"
import Fotter from "../../footer"
import {motion} from 'framer-motion'


function Contact(){
    return(<div>
        <div className="header">
        <Dropdown />
          <Camp />
          <Lonk />
          <Mode />
        </div>
        <form style={{justifyContent:'space-between', 
            width:'90%', marginLeft:'5%', 
            backgroundColor:'#8787872e',marginTop:'10vw', marginBottom:'10vw'}}>
            <div className="form">
            <label style={{margin:20}} >Your Name</label>
            <input style={{margin:20,height:30, width:200, borderRadius:5,
                 border:'none', backgroundColor:'#3e7190af', color:'inherit', overflowX:'hidden'}} type="text" 
                 placeholder="Name" /><br />

            <label style={{margin:20}} >Email Address</label>
            <input style={{margin:20, height:30, width:200, borderRadius:5,
                 border:'none',backgroundColor:'#3e7190af', color:'inherit', overflowX:'hidden'}} type="email" 
                 placeholder="Email Address"/>
                 <br />


            <label style={{margin:20}} >Phone Number</label>
            <input style={{margin:20, height:30, width:200, borderRadius:5, 
                border:'none',backgroundColor:'#3e7190af', color:'inherit', overflowX:'hidden'}} type="tel" 
                placeholder="Phone Number" />


            </div>
            <label style={{margin:20}}>Message</label>
            <textarea style={{margin:20, width:'90%', color:"inherit" ,backgroundColor:'#3e7190af', overflowX:'hidden'}} type='text'  placeholder="message" rows={10} cols={100}></textarea>
        
        </form>
        <motion.button 
        initial={{scale:1, cursor:''}}
        whileHover={{scale:1.2, cursor:'pointer'}}
        style={{alignItems:'center',
          position:'relative', 
          left:'40%', 
          backgroundColor:'#00bbff', 
          border:'none', 
          width:'100px',
          borderRadius:'10px',
          height:'50px',
          marginBottom:'5vw',
          marginTop:'1vw'}}>Submit</motion.button>



        <Fotter />
    </div>)
}



export default Contact







