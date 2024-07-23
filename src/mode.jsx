
import { useState } from "react"
import "./mode.css"


function Mode(){
    const [ltext, setltext]=useState('light')



  function handlechange(event){
    
    let state=event.target.checked
    
    if (state){
      setltext('dark')
      document.getElementById('body').style.backgroundColor='#fff'
      document.getElementById('body').style.color='#212121'
    }
    
    else{
      setltext('light')
      document.getElementById('body').style.backgroundColor='#212121'
      document.getElementById('body').style.color='#fff'
    }
  }
  return(<div   className="m">
    
    <p>{ltext}</p>
  <label className="mode">
    
    <input 
    value='on'
  type="checkbox"  
  onChange={handlechange}
></input><span className="slider" /></label>
  </div>
  
)
}





export default Mode