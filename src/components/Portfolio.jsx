import React from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import tey from '../components/image/TeyImg.png'
import flip from '../components/image/Flipp.png'
import rent from '../components/image/carent.png'

export default function Portfolio() {
    useEffect(() => {
        AOS.init({duration: 2000})
        },[])
  return (
    <div style={{marginTop:'5.5rem'}} >
        <section className="bg-[#2F303A]">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full text-gray-600">
                <div data-aos="fade-right"
        data-aos-delay="800"
        data-aos-duration="500">
                    <p className='text-4xl font-bold inline border-b-4 border-[#eb5424] text-white '>Portfolio</p>
                
                    </div>
                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            <div> 
        <a href="https://teyrex-tech.netlify.app/" target="_blank" rel="noreferrer">
    <img  data-aos="zoom-in-right"
        data-aos-delay="1500"
        data-aos-duration="800" className=" object-full  w-full  rounded-lg h-96 hover:scale-110 duration-1000"src={tey} alt=""/>
        </a>
                          <h2 className="mt-4 text-2xl font-semibold text-gray-800 capitalize text-white">TeYrEX</h2>
                          <h6 className='text-gray-400'>HTML CSS Javascript Bootstrap</h6>
                
                    </div>
                <div> <a href="https://flipsole.netlify.app/" target="_blank" rel="noreferrer">
            <img data-aos="zoom-in-right"
        data-aos-delay="1700"
        data-aos-duration="800" className="object-full w-full rounded-lg h-96 hover:scale-110 duration-1000"src={flip} alt=""/></a>
                          <h2 className="mt-4 text-2xl font-semibold text-gray-800 capitalize text-white">FLIPSOLE</h2>
                          <h6 className='text-gray-400'>Bootstrap CSS Javascript</h6>

        </div>
            <div><a href="https://rentcar-capstone-project.netlify.app/" target="_blank" rel="noreferrer">
                <img data-aos="zoom-in-right"
        data-aos-delay="1900"
        data-aos-duration="800" className=" max-w-sm object-full w-full rounded-lg h-96 hover:scale-110 duration-1000"src={rent} alt=""/></a>
                    <h2 className="mt-4 text-2xl font-semibold text-gray-800 capitalize text-white">RentCar</h2>
                    <h6 className='text-gray-400'>React Js Laravel App</h6>
                </div>
            </div>
        </div>
    </section>
        <div id="Skills"></div>
            </div>
  )
}

