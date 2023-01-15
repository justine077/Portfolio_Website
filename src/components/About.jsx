import React from 'react'
import profile from '../components/image/profile.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import profile1 from './image/aboutme.png';
import { useEffect } from 'react'

export default function About() {
    useEffect(() => {
        AOS.init({duration: 2000})
      },[])
  return (
    <div style={{marginTop:'5.5rem'}} >
        <section className="bg-[#2F303A]">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
                    <p className='text-center text-4xl font-bold inline border-b-4 border-[#eb5424] text-white'>About Me</p>
                
            </div>
        <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
    <img data-aos="fade-right"
        data-aos-delay="500"
                          data-aos-duration="500" className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl" src={profile1} alt=""/>
        <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
            
                
                <p data-aos="fade-right"
        data-aos-delay="1200"
        data-aos-duration="500" className="mt-3 text-sm text-gray-100 dark:text-dark-300 md:text-sm" style={{textAlign: 'justify', textIndent: '60px'}}>
                I am a full-stack front-end web developer. I can provide clean code and pixel-perfect design. I also make the website more & more interactive with web animations. A responsive design makes your website accessible to all users, regardless of their device.   </p>
                
                <p data-aos="fade-right" data-aos-delay="1200" data-aos-duration="500" className="mt-3 text-sm text-gray-100 dark:text-dark-300 md:text-sm" style={{textAlign: 'justify', textIndent: '60px'}}>I’m Justine, a Full-Stack Web Developer specializing in Web Development.
                </p>
                <p data-aos="fade-right"data-aos-delay="500" data-aos-duration="500" className="mt-3 text-sm text-gray-100 dark:text-dark-300 md:text-sm" style={{textAlign: 'justify', textIndent: '60px'}}>
                In 2017, I received my bachelor’s Degree in Technical Teacher Education (Major in Electrical Technology). About a year ago, I started exploring Data Analytics and Web Development. I completely fell in love with Web Development, so I decided to get formal training with KodeGo. I learned a couple of skills to build interactive websites using web animations. 
                </p>
    <div data-aos="fade-right"data-aos-delay="1200" data-aos-duration="500" className="flex items-center mt-6">
        <img className="object-cover object-center w-10 h-10 rounded-full" src={profile} alt=""/>
            <div className="mx-4">
                <h1 className="text-sm text-gray-300 dark:text-gray-100">Justine Villanueva</h1>
                    <p className="text-sm text-gray-400 dark:text-gray-400">Web Developer</p>
                </div>
            </div>
        </div>
    </div>
        </div>
            </section>
                <div id="Contact"></div>
                    </div>
  )
}
