import React from "react";
// import { ProgressBar, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import HTML from '../components/image/html.png';
import CSS from '../components/image/css.png';
import GitHub from '../components/image/github.png';
import ReactImg from '../components/image/react.png';
import JavaScript from '../components/image/javascript.png';
import Bootstrap from '../components/image/Bootstrap.png';
import mysql from '../components/image/mysql.png';
import laravel from '../components/image/laravel.png';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

function Skills() {
    useEffect(() => {
        AOS.init({duration: 2000})
      },[])
  return <div style={{marginTop:'5.5rem'}}>
    
<div name='skills' className='bg-light w-full text-gray-600'>
      {/* Container */}
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div data-aos="fade-left"data-aos-delay="50" data-aos-duration="800">
            <p className='text-4xl font-bold inline border-b-4 border-[#eb5424] '>Skills</p>
                </div>
            <div className='w-full grid grid-cols-1 sm:grid-cols-4 gap-4 text-center py-8'>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#0a192f]'>
    <img  data-aos="fade-up" data-aos-delay="200" data-aos-duration="800" className='w-20 mx-auto mt-5' src={HTML} alt="HTML icon" />
<p className='my-4'>HTML</p>
</div>       
    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#0a192f]'>
        <img data-aos="fade-down" data-aos-delay="400" data-aos-duration="1000" className='w-20 mx-auto mt-5' src={CSS} alt="HTML icon" />
            <p className='my-4'>CSS</p>
                </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#0a192f]'>
        <img  data-aos="fade-up"data-aos-delay="500" data-aos-duration="1000" className='w-20 mx-auto mt-5' src={JavaScript} alt="HTML icon" />
    <p className='my-4'>JAVASCRIPT</p>
</div>
    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#0a192f]'>
        <img  data-aos="fade-down" data-aos-delay="600" data-aos-duration="1000"  className='w-20 mx-auto mt-5' src={ReactImg} alt="HTML icon" />
            <p className='my-4'>REACT</p>
                </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#0a192f]'>
        <img  data-aos="fade-up"data-aos-delay="600" data-aos-duration="1000" className='w-20 mx-auto mt-4' src={GitHub} alt="HTML icon" />
    <p className='my-4'>GITHUB</p>
</div>
    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#0a192f]'>
        <img  data-aos="fade-down"data-aos-delay="700" data-aos-duration="1000" className='w-20 mx-auto mt-4' src={Bootstrap} alt="HTML icon" />
            <p className='my-4'>BOOTSTRAP</p>
                </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#0a192f]'>
        <img  data-aos="fade-up" data-aos-delay="800" data-aos-duration="1000" className='w-20 mx-auto mt-4' src={mysql} alt="HTML icon" />
    <p className='my-4'>MYSQL</p>
</div>
    <div  className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#0a192f]'>
        <img  data-aos="fade-down" data-aos-delay="900" data-aos-duration="1000" className='w-20 mx-auto mt-4' src={laravel} alt="HTML icon" />
            <p className='my-3'>LARAVEL</p>
                </div>
            </div>
        </div>
    </div>
<div id="Resume"></div>
    </div> 
}

export default Skills;