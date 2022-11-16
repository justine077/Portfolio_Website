import React from 'react'
import resume from './Resume.pdf'
import '../App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'


export default function Resume() {
  useEffect(() => {
    AOS.init({duration: 2000})
  },[])
  return (
  <div style={{marginTop:'5.5rem'}}>
      <section className="bg-light dark:bg-gray-500">
          <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full text-gray-600">
              <div data-aos='fade-up'>
                  <p className='text-4xl font-bold inline border-b-4 border-[#eb5424]' >Resume</p>
              <p className='py-4'></p>
          </div>
      <footer className="bg-[#0a192f] btn2" data-aos='fade-right'>
    <div className="container px-6 py-8 mx-auto">
      <div className="text-center">
        <div data-aos='fade-up' className="flex flex-col mt-4 sm:flex-row sm:items-center sm:justify-center">
            <a href={resume} download className=" no-underline relative inline-block text-lg group">
                <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="downloadcv absolute inset-0 w-full h-full px-5 py-3 rounded-lg "></span>
        <span className="absolute left-0 w-full h-48  transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#eb5424] group-hover:-rotate-180 ease"></span>
    <span className="relative text-white">Download CV</span>
        </span>
            <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                </a>
          </div>
      </div>
  </div>
      </footer>
          </div>
              </section>
                <div id="About"></div>
            </div>
        )
      };
