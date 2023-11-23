import {React}  from "react";
import Navbar from './Navbar'

function Home(){ 
  return (
    <section id="home">
      <div className="home_container">
        <Navbar/>      
        <div className='home_content neon-circle'>
          <div className="blue_neon fx_fade1">Welcome</div>                 
          <div className="green_neon fx_fade2">my</div>
          <div className="red_neon">PORTFOLIO</div>     
        </div>
      </div>
    </section>
  )
}

export default Home
