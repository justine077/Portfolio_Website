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
        <section className="bg-light dark:bg-gray-500">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full text-gray-600">
                <div data-aos='fade-up'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#eb5424] '>Portfolio</p>
                
                    </div>
                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            <div data-aos="fade-down-right"> 
        <a href="https://teyrex-tech.netlify.app/" target="_blank" rel="noreferrer">
    <img className=" object-full  w-full  rounded-lg h-96 hover:scale-110 duration-1000"src={tey} alt=""/>
        </a>
            <h2 className="mt-4 text-2xl font-semibold text-gray-800 capitalize dark:text-dark">Html CSS Javascript</h2>
                
                    </div>
                <div data-aos="fade-down-right"> <a href="https://flipsole.netlify.app/" target="_blank" rel="noreferrer">
            <img className="object-full w-full rounded-lg h-96 hover:scale-110 duration-1000"src={flip} alt=""/></a>
        <h2 className="mt-4 text-2xl font-semibold text-gray-800 capitalize dark:text-dark">Bootstrap CSS Javascript</h2>

        </div>
            <div data-aos="fade-down-right"><a href="https://rentcar-capstone-project.netlify.app/" target="_blank" rel="noreferrer">
                <img className=" max-w-sm object-full w-full rounded-lg h-96 hover:scale-110 duration-1000"src={rent} alt=""/></a>
                    <h2 className="mt-4 text-2xl font-semibold text-gray-800 capitalize dark:text-dark">React Js Laravel App
                        </h2>
        
                </div>
            </div>
        </div>
    </section>
        <div id="Skills"></div>
            </div>
  )
}

