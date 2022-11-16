// import React from 'react';
// import {Nav, Navbar} from 'react-bootstrap';
// import '../App.css'

// function BasicExample ()  {
//   return (
//           <Navbar bg="light" expand="lg" className=' fixed-top nav1'>
//           <Navbar.Brand href="/#" className='mx-3'>Justine Villanueva</Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav" className='mx-3'>
//           <Nav className="ms-auto mx-5">
//                 <Nav.Link  href="/#" >Home</Nav.Link>
//                 <Nav.Link className=' hover:scale-110 duration-500' href="#Portfolio">Portfolio</Nav.Link>
//                 <Nav.Link className=' hover:scale-110 duration-500' href="#Skills">Skills</Nav.Link>
//                 <Nav.Link className=' hover:scale-110 duration-500' href="#Resume">Resume</Nav.Link>
//                 <Nav.Link className=' hover:scale-110 duration-500' href="#About">About</Nav.Link>
//                 <Nav.Link className=' hover:scale-110 duration-500' href="#Contact">Contact</Nav.Link>
//           </Nav>
//           </Navbar.Collapse>
//           </Navbar>


//   );
// }

// export default BasicExample;

import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

import '../App.css'


function Navbar() {
  const [click, setClick] = useState(false);
  // const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);



  return (
    <>
      <nav className='navbar fixed-top d-flex justify-content-between'>
        <a href='/' onClick={closeMobileMenu} className="text-decoration-none">
            <h5 className='mx-3 text-white text-decoration-none text-center'>Justine Villanueva</h5>
        </a>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        
          <li className='nav-item'>
            <a href='/#'
              className='nav-links hover:scale-110 duration-500'
            >
              HOME
            </a>
          </li>
          
          <li className='nav-item'>
            <a href='#Portfolio'
              className='nav-links hover:scale-110 duration-500'
            >
              PORTFOLIO
            </a>
          </li>
         
          <li className='nav-item'>
            <a href='#Skills'
              className='nav-links hover:scale-110 duration-500'
            >
              SKILLS
             
            </a>
          </li>

          <li className='nav-item'>
            <a href='#Resume'
              className='nav-links hover:scale-110 duration-500'
            >
              RESUME
            </a>
          </li>

          <li className='nav-item'>
            <a href='#About'
              className='nav-links hover:scale-110 duration-500'
            >
              ABOUT
            </a>
          </li>

          <li className='nav-item'>
            <a href='#Contact'
              className='nav-links hover:scale-110 duration-500'
            >
             CONTACT
            </a>
          </li>

        </ul>
       
      </nav>
    </>
  );
}

export default Navbar