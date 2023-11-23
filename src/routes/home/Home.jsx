import {React}  from "react";

import Navbar from '../../components/Navbar'

function Home(){ 
  return (
    <section id="home">
      <Navbar/>      
      <div className='container_home neon-circle'>
        <div className="blue_neon fx_fade1">Welcome</div>                 
        <div className="green_neon fx_fade2">my</div>
        <div className="red_neon">PORTFOLIO</div>     
      </div>
    </section>
  )
}

export default Home
