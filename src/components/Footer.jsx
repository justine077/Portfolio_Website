import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function Footer() {
    useEffect(() => {
        AOS.init({duration: 2000})
      },[])
  return (
    <div style={{marginTop:'3.5rem'}} className="m-3 p-2">
        <footer className="bg-[#202027]">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div data-aos="fade-right" data-aos-delay="300" data-aos-duration="500">
                    <p className='text-4xl font-bold text-center border-b-4 border-[#eb5424] inline text-white'>Follow Me</p>
                <p className='py-4'></p>
             </div>
        <div className="text-center">
    <div className="flex flex-col mt-4 sm:flex-row sm:items-center sm:justify-center" >
        <a data-aos="fade-up"
        data-aos-delay="500"
        data-aos-duration="500" href="https://www.facebook.com/justine.villanueva.522" target="_blank" rel="noreferrer" className="mx-4 p-2 text-gray-300 transition-colors duration-300 dark:text-gray-300 hover:text-[#eb5424]" aria-label="Facebook">
            <svg className="w-12 h-12 fill-current m-auto" viewBox="0 0 24 24" fill="none"xmlns="http://www.w3.org/2000/svg">
                <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z">
                    </path>
                </svg>
            </a>
        <a data-aos="fade-down"
        data-aos-delay="500"
        data-aos-duration="500" href="https://github.com/justine077" target="_blank" rel="noreferrer" className="mx-4 p-2 text-gray-300 transition-colors duration-300 dark:text-gray-300 hover:text-[#eb5424]"  aria-label="Github">
    <svg className="w-12 h-12 fill-current m-auto" viewBox="0 0 24 24" fill="none"xmlns="http://www.w3.org/2000/svg">
        <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z">
            </path>
                </svg>
                    </a>
                <a data-aos="fade-up"
        data-aos-delay="500"
        data-aos-duration="500" href="https://www.linkedin.com/in/justine-villanueva-85550b233/" target="_blank" rel="noreferrer" className="mx-4 p-2" aria-label="Linkedin">
            <svg  className="w-12 h-12 text-gray-300 fill-current m-auto hover:text-[#eb5424]" xmlns="http://www.w3.org/2000/svg"viewBox="0 0 448 512">
        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
    </path>
        </svg>
            </a>
                </div>
                    </div>
                <hr className="my-10 border-gray-200 dark:border-gray-700" />
            <div className="flex flex-col items-center sm:flex-row sm:justify-between">
        <p className="text-sm text-gray-400 m-auto">© Copyright 2022. All Rights Reserved.</p>
    </div>
        </div>
            </footer>
                </div>
  )
}
