import React from 'react'
import Cont2 from '../components/image/Cont2.png'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useRef} from 'react'
import '../App.css'


function Contact() {  
    useEffect(() => {
        AOS.init({duration: 2000})
      },[])  
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ketg5de', 'template_c7bayyh', form.current, 'o-mXOo1OU_lOkpPEj')
        .then((result) => {
            console.log(result.text);
            toast.success("Thank you for your message")

        }, (error) => {
            console.log(error.text);
            toast.error("Something Wrong")
        });
    };
  
  return (
    <div style={{marginTop:'5.5rem'}} >
        <section className="bg-[#2F303A]">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div data-aos="fade-right"data-aos-delay="800" data-aos-duration="500">
                    <p className='text-4xl font-bold inline border-b-4 border-[#eb5424] text-white'>Contact Me</p>
               
            </div>
        <div className="lg:flex lg:items-center lg:-mx-6">
    <div className="lg:w-1/2 lg:mx-6 ">
        <div className="mt-6 space-y-8">
            <img data-aos="zoom-in" data-aos-delay="900" data-aos-duration="500" className='w-100mx-auto mt-5' src={Cont2} alt="HTML icon" />
                </div>
                    </div>
                <div className="mt-8 lg:w-1/2 lg:mx-6">
            <div data-aos="fade-left"data-aos-delay="1300" data-aos-duration="500"className="w-full px-8 py-10 mx-auto overflow-hidden bg-[#202027] rounded-lg shadow-2xl dark:bg-gray-1000 lg:max-w-xl shadow-gray-300/50 dark:shadow-black/50">
        <h1 className="text-lg font-medium text-white capitalize">Send Me an Email</h1>
    <form className="mt-6" ref={form} onSubmit={sendEmail}>
        <div className="flex-1">
            <label className="block mb-2 text-sm text-white dark:text-gray-200">Full Name</label>
                <input name="user_name" type="text" placeholder="John Doe" className="block w-full px-2 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"required />
                    </div>
                <div className="flex-1 mt-6">
            <label className="block mb-2 text-sm text-white dark:text-gray-200">Email address</label>
        <input name="user_email" type="email" placeholder="johndoe@example.com" className="block w-full px-2 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"required/>
    </div>
        <div className="w-full mt-6">
            <label className="block mb-2 text-sm text-white dark:text-gray-200">Message</label>
                <textarea name="message" className="block w-full h-32 px-2 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message" required></textarea>
            </div>
          <div className="cursor-pointer mt-3 w-full text-center px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-light text-dark inline-block">
        <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#eb5424] group-hover:h-full opacity-90"></span>
    <button className="flex relative group-hover:text-white m-auto" type="submit">Send</button>
        </div>
            </form>
                <ToastContainer/>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </div>
  )
}

export default Contact