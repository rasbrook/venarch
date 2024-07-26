import {motion} from 'framer-motion'

function Leftabout(props){
    return(<div style={{display:'flex', flexWrap:'wrap', marginLeft:'4vw', marginRight:'4vw', marginBottom:'2vw', marginTop:'2vw'}}>
        <motion.img 
                src={props.sorce}
                initial={{opacity:0, position:'relative', bottom:150}} 
                whileInView={{opacity:1,position:'relative',bottom:0}} 
                transition={{duration:1}}
                style={{minWidth:280, maxWidth:600, width:'30vw'}}
                
                ></motion.img>
        <motion.div 
            style={{minWidth:280, maxWidth:600, width:'50vw', padding:30}}
            initial={{opacity:0, position:'relative', top:150}} 
                whileInView={{opacity:1,position:'relative',top:0}} 
                transition={{duration:1, delay:0.1}}
            
            >
            <h1>{props.head}</h1>
            <p style={{fontSize:'1.5em', textAlign:'justify'}}>{props.con}</p>

        </motion.div>


    </div>)
}




export default Leftabout 