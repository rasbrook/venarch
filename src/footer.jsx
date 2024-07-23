
import { Link } from 'react-router-dom';



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

       <div  style={{width:'30%', margin:'1.5%', minWidth:250}}>
       <Link to='/' 
                    style={{margin:'2vw', fontSize:'1.3em',textDecoration:'none', color:'inherit'}}
        >Home</Link>
       <Link to='/about'
                    style={{margin:'2vw', fontSize:'1.3em',textDecoration:'none', color:'inherit'}}
        >About</Link>
        <Link to='/project' 
                    style={{margin:'2vw', fontSize:'1.3em',textDecoration:'none', color:'inherit'}}
        >Project</Link>
        <Link to='/contact' 
                    style={{margin:'2vw',fontSize:'1.3em',textDecoration:'none', color:'inherit'}}
        >Contact</Link>
        
       
        
       </div>
       
       <div style={{width:'30%', margin:'1.5%', minWidth:250, placeContent:'center'}}>
            
            <h2 style={{textAlign:'center', fontSize:'32px'}}>Contact Detail</h2>
            <h3 style={{textAlign:'center'}}>Phone No: <span>0977313131</span></h3>
            <h3 style={{textAlign:'center'}}>Email: <span>info@venarch.com</span></h3>
            <h3 style={{textAlign:'center'}}>Location: <span>Semit 72</span></h3>
            
            
            
       </div>
       <nav style={{width:'100%', minHeight:50, alignItems:'center', backgroundColor:'#000', display:'flex'}}>
        <p style={{textAlign:'center',color:'#fff', marginLeft:'10vw', marginRight:'5vw', fontSize:'0.9em'}}> © 2024 venarch All Rights Reserved</p>
        <a href='https://bsquaresoftwaresolution.netlify.app/' target='_black' style={{textAlign:'center',color:'#fff', marginLeft:'5vw', fontSize:'0.9em', cursor:'pointer', textDecoration:'none'}}>Design and Develop by B Square software solution</a>
       </nav>
       
        

    </div>)
}




export default Fotter


