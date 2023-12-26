"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import companyLogo from '../public/aspc1.jpeg';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="lg:flex lg:justify-between lg:items-center py-6 px-10 shadow-xl fixed top-0 left-0 right-0 z-20 bg-white w-screen">
      <div className="flex items-center justify-between">
        <div className="mr-4">
          {/* <Image src={companyLogo} alt="Company Logo" width={64} height={64} /> */}
          <h1 className='text-4xl text-red-800 font-black cursor-pointer'><a href="/">ASPC</a></h1>
        </div>
        {/* Menu button for mobile */}
        <button
          onClick={handleMenuToggle}
          className="lg:hidden focus:outline-none"
        >
          <svg
            className="h-6 w-6 text-gray-800 hover:text-blue-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      {/* Navigation links */}
      <div className={`lg:flex ${isMenuOpen ? 'block' : 'hidden'} lg:text-xl mt-4 lg:mt-0`}>
        <a href="#about" className="block lg:inline-block text-gray-800 hover:text-red-700 mr-6 lg:mb-0 mb-2">ABOUT</a>
        <a href="#services" className="block lg:inline-block text-gray-800 hover:text-red-700 mr-6  lg:mb-0 mb-2">SERVICES</a>
        <a href="#profile" className="block lg:inline-block text-gray-800 hover:text-red-700 mr-6  lg:mb-0 mb-2">PROFILE</a>
        <a href="#team" className="block lg:inline-block text-gray-800 hover:text-red-700 mr-6  lg:mb-0 mb-2">TEAM</a>
        <a href="#contact" className="block lg:inline-block text-gray-800 hover:text-red-700">CONTACT</a>
      </div>
    </div>
  );
};

export default Navbar;
