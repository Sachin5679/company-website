"use client";
import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { BsFillTelephoneFill, BsPhoneFill } from "react-icons/bs";
import { MdLocationOn, MdContactPhone } from "react-icons/md"

const ContactUs = () => {
  return (
    <section id='contact' className='flex flex-col md:h-screen w-screen'>
      <div className='flex-grow flex'>
        {/* Contact Details - Left Side */}
        <div className='md:p-12 p-4 bg-black md:w-1/3 flex flex-col justify-center'>
          <h1 className='md:text-6xl text-xl text-gray-100 font-bold'>CONTACT US</h1>
            <div className='mb-4'>
              <p className='flex text-gray-200 md:text-xl text-xs mt-8'><span><MdLocationOn className='mt-1 mr-2 text-red-400' /></span>Arabilla Building, M28, P.O Box: 80203, Al Waheda, Dubai, U.A.E</p>
              <p className='flex text-gray-200 md:text-xl text-xs '><span className=''><FaEnvelope className='text-red-400 mr-2 mt-1' /></span><a href="mailto:info@aspcuae.com" className='hover:text-red-400'>info@aspcuae.com</a></p>
              <p className='flex text-gray-200 md:text-xl text-xs'><span><BsFillTelephoneFill className='text-red-400 mr-2 mt-1' /></span> +971 4 4513 525 </p>
              <p className='flex text-gray-200 md:text-xl text-xs'><span><MdContactPhone className='text-red-400 mr-2 mt-1' /></span> +971 52 4531 933 </p>
              <p className='flex text-gray-200 md:text-xl text-xs'><span><BsPhoneFill className='text-red-400 mr-2 mt-1' /></span> +971 55 2769 485 </p>
            </div>

        </div>

        {/* Right Side - Map */}
        <div className='w-2/3'>
          <div className='md:p-12 p-4 h-full bg-black'>
            {/* Add your map component or embed code here */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14430.504772848097!2d55.3516142!3d25.2831572!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5c8e90d8d5cd%3A0x38eaa6fca0306eda!2sArabilla%20Building!5e0!3m2!1sen!2sae!4v1703939653579!5m2!1sen!2sae"
              width="100%"
              height="100%"
              loading="lazy"
              title="Location Map"
              className='rounded-2xl'
            ></iframe>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-black text-gray-400 text-center p-4 mt-auto">
        Copyright © 2024 ASPC Contractors
      </footer>
    </section>
  );
};

export default ContactUs;
