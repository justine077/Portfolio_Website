import React from 'react'
import '../App.css'

export default function Home() {
  return (
  <div>
    {/*  START HOME */}
      <section id="home" className="templatemo-home">
          <div className="container">
              <div className="row">
                  <div className="col-md-2 col-sm-1"></div>
                    <div className="col-md-8 col-sm-10">
                <h1 className="tm-home-title"><span className='span1'>DEV </span><strong>Justine</strong></h1>
            <h2 className="tm-home-subtitle">Full Stack Web Developer</h2>
        <p>I am a <strong>Full Stack Web Developer </strong> 
        creating modern and responsive designs for <strong>Web</strong>. Let us work together. Thank you.
  </p>
      <a href="#Portfolio"className="btn1">Let's Begin</a>
          </div>
              <div className="col-md-2 col-sm-1"></div>
                </div>
                    </div>
                </section>
    {/* END HOME  */}
          <div id="Portfolio" ></div>
    </div>
  )
}
