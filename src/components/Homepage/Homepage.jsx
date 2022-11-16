import React from 'react'
import Home from '../Home'
import Portfolio from '../Portfolio'
import Skills from '../Skills'
import About from '../About'
import Contact from '../Contact'
import Footer from '../Footer'
import Resume from '../Resume'
import '../../App.css'
export default function Homepage() {
  return (
    <div>
         <Home/>
         <Portfolio/>
         <Skills/>
          <Resume/>
          <About/>
          <Contact/>
         <Footer/>
    </div>
  )
}
