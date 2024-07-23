import Camp from "./campanyname";
import Lonk from "./lonk";
import ayer from './assets/elfu.jpg'
import garment from './assets/garment.jpg'
import Cards from "./cards";
import no1 from './assets/no 1.jpg';
import planning from './assets/planning.jpg'
import design from './assets/design.png';
import build from './assets/constraction.jpg';
import Mode from "./mode";
import Dropdown from "./dropdown";
import Fotter from "./footer";
import Pro from "./pro";
import { Link } from "react-router-dom";




function App() {
  const campanyname='venarch'
  return (
    <div>

    <div className="header">
          <Dropdown />
          <Camp />
          <Lonk />
          <Mode />
         
         
        </div>
        <div className="wheretake">
          <h1 className="where">WHERE DREAMS</h1>
          <h1 className="take">TAKE SHAPE</h1>
       </div>
       <div style={{margin:100}}>
       <h3 style={{textAlign:'center'}}>Welcome to venarch</h3>
       <h1 style={{textAlign:'center'}}>INNOVATIVE ARCHITECTURE</h1>
       </div>
       <div className="mycards">
          <Cards cardimage={planning} head='Planning' about='Consultation, master planning and research.' />
          <Cards cardimage={design} head='Architectural Design' about='Design, technical drawings and 3D visualisation' />
          <Cards cardimage={build} head='Project Consulting' about='Contract negotiations and project administration' />
    
       </div>
       <h1 style={{textAlign:'center'}}>
        About Us
       </h1>
       <p style={{textAlign:'justify', fontSize:'1.5em', margin:'2vw'}}>Founded by Beneyas Edeca in 2016, Venarch emerged from coffee-stained sketches and starlit dreams. 
        From cozy cafés to the audacious “Skyward Tower,” they craft spaces that tell stories. Their quirky
         office—where ferns survive monsoons—echoes laughter and espresso-fueled creativity. Venarch’s legacy?
          More than blueprints; they build wonder. Step inside their world, trace the lines, and feel the 
          pulse of dreams etched in concrete and glass.<Link to={'/about'} style={{color:'inherit', fontSize:'0.6em'}}>...see more</Link> </p>
       <div style={{margin:100}}>
       <h3 style={{textAlign:'center'}}>We are Passionate Architects</h3>
       <h1 style={{textAlign:'center'}}>FEATURED WORK</h1>
       </div>
      <Pro sorce={no1} title='No 1 PLAZA' location='Semit 72, Addis Abeba' status='Completed in 2022 '  discrip='No 1 Plaza was
       conceived as a harmonious blend of functionality and aesthetics. We aimed for timeless elegance—a place where 
       people feel inspired, whether they’re sipping coffee, working, or enjoying green spaces.it sits in 2000 square feet and 11 floor high, 
       The interplay of glass,
        steel, and We engineered seamless transitions between apartments, offices, and common areas.'/>


      


      <Pro sorce={garment} title='Residential Projects' location='Haile Garment, Addis Abeba' status='On Going '  discrip='No 1 Plaza was
       conceived as a harmonious blend of functionality and aesthetics. We aimed for timeless elegance—a place where 
       people feel inspired, whether they’re sipping coffee, working, or enjoying green spaces. The interplay of glass,
        steel, and We engineered seamless transitions between apartments, offices, and common areas.'/>


    <Pro sorce={ayer} title='Residential Projects' location='Ayer Tena, Addis Abeba' status='Completed in 2023 '  discrip='Imagine 
      standing before this residential gem: nestled in Ayer Tena, it seamlessly blends [Client]s vision with our design expertise. 
      Across 300 square feet and 4 floors, it marries form, function, and innovation. Our goal? Crafting a space where every room 
      tells a story.'/>

      <Link to={'./project'}  
      style={{color:'inherit', 
        backgroundColor:'#3e7190d3', 
        borderRadius:'0.8vw',
        fontSize:'1em', 
        padding:'2vw',
         textDecoration:'none', 
        position:'relative',
        top:'-3vw',
        left:'38%'
        
        }}>See more projects +</Link>


    
      



    
       
    
      <Fotter />
      </div>
    )
}

export default App
