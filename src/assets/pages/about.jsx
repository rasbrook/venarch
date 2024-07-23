import Lonk from "../../lonk"
import Dropdown from "../../dropdown"
import Camp from "../../campanyname"
import Mode from "../../mode"
import Fotter from "../../footer"
import Leftabout from "./contabout"
import Rightabout from "./rcont"
import blue from './gallery/blue.jpg'
import b1 from './gallery/b1.jpg'
import b2 from './gallery/b2.jpg'
import b3 from './gallery/b3.jpg'
import b4 from './gallery/b4.jpg'
import b6 from './gallery/b6.jpg'



function About(){
    return(<div>
        <div className="header">
        <Dropdown />
          <Camp />
          <Lonk />
          <Mode />
        </div>
        <h1 style={{fontSize:'3em', fontWeight:800, textAlign:'center'}}>Venarch: Crafting Dreams Since 2016</h1>

        <Leftabout sorce={blue}  head='The Genesis: A Blueprint and a Dream' con='In the heart of a Addis Abeba city,
         where car horns harmonize with coffee shop chatter, Beneyas Edeca laid the cornerstone of Venarch. It was
          a crisp morning—the kind that whispers secrets to dreamers. Beneyas, fueled by equal parts caffeine and
           imagination, sketched Venarch’s first vision on a napkin. The café—oh, that cozy nook with mismatched 
           chairs and sun-kissed windows—became Venarch’s debut canvas. It wasn’t just about lattes and croissants;
            it was about conversations sparked, friendships forged, and stories etched into wooden tables.' />

          <Rightabout sorce={b1}  head='The Rise: From Coffee Stains to Skyward Dreams' con='As Venarch’s portfolio
           bloomed, so did its team. Architects with ink-stained fingers and starry-eyed interns joined the fray.
            They designed homes that whispered “welcome” and office spaces that hummed with creativity. But it was
             the “Skyward Tower” that stole the city’s breath—a glass-and-steel marvel that dared gravity to a duel.
              Beneyas stood atop its pinnacle, wind tousling unruly hair, and declared, “We build dreams, my friends.”' />
              <Leftabout sorce={b2}  head='The Quirks: Where Coffee Meets Blueprint' con='Venarch’s office—more like 
              an art studio—had quirks. The coffee maker (yes, the same one from the garage days) perched on a stack
               of blueprints. The fern in the corner had a name (Fernando) and a backstory (it survived a monsoon).
                And every Friday, they held “Sketch & Sip” sessions—where ideas flowed as freely as the espresso.' />

          <Rightabout sorce={b6}  head='The Legacy: Blueprints and Beyond' con='Today, Venarch stands tall (literally
           and metaphorically). Their designs ripple through the cityscape. The café still stands, its walls echoing 
           laughter and whispered confessions. But there’s more: the eco-friendly library, the bridge that curves like
            a smile, the community center where kids chase sunlight. Beneyas still sketches—sometimes on napkins,
             sometimes on cloud-dappled mornings.' />


              <Leftabout sorce={b4}  head='The Invitation: Step Inside Our Story' con='So, whether you’re a curious
               client or an aspiring architect, step into Venarch’s world. Trace the lines of our blueprints; feel
                the pulse of our spaces. Because beyond steel beams and glass façades, we craft dreams. And in every
                 corner, Beneyas’ whispered promise lingers: “We build more than structures; we build wonder.”' />


                 

          



        <Fotter />
    </div>)
}



export default About