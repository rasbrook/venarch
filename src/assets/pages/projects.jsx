import Lonk from "../../lonk"
import Dropdown from "../../dropdown"
import Camp from "../../campanyname"
import Mode from "../../mode"
import Fotter from "../../footer"
import { useState } from "react"
import Pro from "../../pro"
import no1 from '../../assets/no 1.jpg';
import a from './gallery/a.jpg'
import b from './gallery/b.jpg'
import c from './gallery/c.jpg'
import d from './gallery/d.jpg'
import f from './gallery/f.jpg'
import g from './gallery/g.jpg'
import h from './gallery/h.jpg'
import i from './gallery/i.jpg'
import n from './gallery/n.jpg'
import q from './gallery/q.jpg'
import j from './gallery/j.jpg'
import k from './gallery/k.jpg'
import l from './gallery/l.jpg'
import m from './gallery/m.jpg'
import o from './gallery/o.jpg'
import p from './gallery/p.jpg'
import r from './gallery/r.jpg'
import s from './gallery/j.jpg'
import t from './gallery/t.jpg'
import u from './gallery/u.jpg'
import v from './gallery/v.jpg'
import ayer from '../../assets/elfu.jpg'
import garment from '../../assets/garment.jpg'
import a1 from './gallery/a1.jpg'
import a2 from './gallery/a2.jpg'
import a3 from './gallery/a3.jpg'
import a4 from './gallery/a4.jpg'
import a5 from './gallery/a5.jpg'
import a6 from './gallery/a6.jpg'







function Project(){
    const [pro, setPro]=useState(q)
    const [spa, setspa]=useState(a)
    const [apart, setapa]=useState(a1)



    return(<div>
        <div className="header">
        <Dropdown />
          <Camp />
          <Lonk />
          <Mode />
        </div>
        <h1 style={{textAlign:'center', fontSize:'5em'}}>
          project galleries
          </h1>

          <Pro sorce={no1} title='No 1 PLAZA' location='Semit 72, Addis Abeba' status='Completed in 2022 '  discrip='No 1 Plaza was
       conceived as a harmonious blend of functionality and aesthetics. We aimed for timeless elegance—a place where 
       people feel inspired, whether they’re sipping coffee, working, or enjoying green spaces.it sits in 2000 square feet and 11 floor high, 
       The interplay of glass,
        steel, and We engineered seamless transitions between apartments, offices, and common areas.'/>
        <h1  style={{textAlign:'center', fontSize:'3em'}}>No 1 Plaza galleries</h1>
        
        <h3 style={{textAlign:'center', fontSize:'1.8em'}}>No 1 Apartment</h3>
        <div style={{display:'flex', marginBottom:'5vw'}}>
            <img  src={apart} style={{maxWidth:'50vw', maxHeight:'60vw'}}/>
            <div className="gallery" style={{display:'flex' , flexWrap:'wrap', maxHeight:'60vw', overflowY:'scroll'}}>
                <img src={a2} onClick={()=>{setapa(a2)}} />
                <img src={a3} onClick={()=>{setapa(a3)}} />
                <img src={a4} onClick={()=>{setapa(a4)}} />
                <img src={a5} onClick={()=>{setapa(a5)}} />
                <img src={a6} onClick={()=>{setapa(a6)}} />
                <img src={a1} onClick={()=>{setapa(a1)}} />
            
                

            </div>
            
        </div>




        <h3 style={{textAlign:'center', fontSize:'1.8em'}}>No 1 Fitness</h3>
        <div style={{display:'flex', marginBottom:'5vw'}}>
            <img  src={pro} style={{maxWidth:'50vw', maxHeight:'60vw'}}/>
            <div className="gallery" style={{display:'flex' , flexWrap:'wrap', maxHeight:'60vw', overflowY:'scroll'}}>
                <img src={j} onClick={()=>{setPro(j)}} />
                <img src={q} onClick={()=>{setPro(q)}} />
                <img src={k} onClick={()=>{setPro(k)}} />
                <img src={l} onClick={()=>{setPro(l)}} />
                <img src={m} onClick={()=>{setPro(m)}} /> 
                <img src={o} onClick={()=>{setPro(o)}} />
                <img src={p} onClick={()=>{setPro(p)}} />
                <img src={r} onClick={()=>{setPro(r)}} />
                <img src={s} onClick={()=>{setPro(s)}} />
                <img src={t} onClick={()=>{setPro(t)}} />
                <img src={u} onClick={()=>{setPro(u)}} />
                <img src={v} onClick={()=>{setPro(v)}} />

            </div>
            
        </div>
        <h3 style={{textAlign:'center', fontSize:'1.8em'}}>No 1 Spa</h3>
        <div style={{display:'flex', marginBottom:'5vw'}}>
            <img  src={spa} style={{maxWidth:'50vw', maxHeight:'60vw'}}/>
            <div className="gallery" style={{display:'flex' , flexWrap:'wrap', maxHeight:'60vw', overflowY:'scroll'}}>
                <img src={n} onClick={()=>{setspa(n)}} />
                <img src={a} onClick={()=>{setspa(a)}} />
                <img src={b} onClick={()=>{setspa(b)}} />
                <img src={c} onClick={()=>{setspa(c)}} />
                <img src={d} onClick={()=>{setspa(d)}} />
                <img src={f} onClick={()=>{setspa(f)}} />
                <img src={g} onClick={()=>{setspa(g)}} />
                <img src={h} onClick={()=>{setspa(h)}} />
                <img src={i} onClick={()=>{setspa(i)}} />
                <img src={c} onClick={()=>{setspa(c)}} />
                

            </div>
            
        </div>

        <Pro sorce={ayer} title='Residential Projects' location='Ayer Tena, Addis Abeba' status='Completed in 2023 '  discrip='Imagine 
      standing before this residential gem: nestled in Ayer Tena, it seamlessly blends [Client]s vision with our design expertise. 
      Across 300 square feet and 4 floors, it marries form, function, and innovation. Our goal? Crafting a space where every room 
      tells a story.'/>



        <Pro sorce={garment} title='Residential Projects' location='Haile Garment, Addis Abeba' status='On Going '  discrip='No 1 Plaza was
       conceived as a harmonious blend of functionality and aesthetics. We aimed for timeless elegance—a place where 
       people feel inspired, whether they’re sipping coffee, working, or enjoying green spaces. The interplay of glass,
        steel, and We engineered seamless transitions between apartments, offices, and common areas.'/>


   




        <Fotter />
    </div>)
}



export default Project







