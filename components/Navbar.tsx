"use client"
import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { MdHome } from "react-icons/md";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="lg:flex lg:justify-between lg:items-center py-6 px-10 shadow-xl fixed top-0 left-0 right-0 z-20 bg-white w-screen">
      <div className="flex items-center justify-between">
        
        <div className="mr-4">
          {/* <Image src={companyLogo} alt="Company Logo" width={64} height={64} /> */}
          <h1
            className='text-4xl text-red-800 font-black cursor-pointer'
            onClick={scrollToTop}
          >
            <a className='flex' href="/"><MdHome className='text-4xl mr-2 bg-red-800 text-white p-2 rounded-full' /> ASPC</a>
            
          </h1>
          
        </div>
        
        {/* Menu button for mobile */}
        <button onClick={handleMenuToggle} className="lg:hidden focus:outline-none">
          <svg
            className="h-6 w-6 text-gray-800 hover:text-blue-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      {/* Navigation links */}
      <div className={`lg:flex ${isMenuOpen ? 'block' : 'hidden'} lg:text-xl mt-4 lg:mt-0`}>
        <Link to="about" smooth={true} duration={500} offset={-45} className="block lg:inline-block hover:cursor-pointer text-gray-800 hover:text-red-700 mr-6 lg:mb-0 mb-2">ABOUT</Link>
        <Link to="services" smooth={true} duration={500} offset={-90} className="block lg:inline-block hover:cursor-pointer text-gray-800 hover:text-red-700 mr-6  lg:mb-0 mb-2">SERVICES</Link>
        <Link to="profile" smooth={true} duration={500} offset={-90} className="block lg:inline-block hover:cursor-pointer text-gray-800 hover:text-red-700 mr-6  lg:mb-0 mb-2">PROFILE</Link>
        {/* <Link to="team" smooth={true} duration={500} className="block lg:inline-block hover:cursor-pointer text-gray-800 hover:text-red-700 mr-6  lg:mb-0 mb-2">TEAM</Link> */}
        <Link to="contact" smooth={true} duration={500} offset={-70} className="block lg:inline-block hover:cursor-pointer text-gray-800 hover:text-red-700">CONTACT</Link>
        
      </div>
    </div>
  );
};

export default Navbar;
