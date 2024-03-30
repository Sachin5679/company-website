import React from 'react';
import Image from 'next/image';
import companyLogo from '../public/aspc1.jpeg';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id='hero' className="h-screen w-screen relative flex items-center justify-center bg-red-800 pt-10">
      <div className="text-white px-10">
        <h1 className="md:text-9xl text-4xl">
          ASPC
        </h1>
        <h1 className="md:text-5xl text-2xl">
          BUILDING CONTRACTING
        </h1>
        <p className="my-2 text-red-200">Elevating Projects with Unmatched Quality, Reliability and Customer Satisfaction.</p>
        <button className="outline my-4 p-4 rounded-xl hover:bg-white hover:text-red-800 hover:shadow-2xl hover:outline-none transition duration-300">
          <a href="mailto:info@aspcuae.com" className="flex items-center">
            Get in touch <FaArrowRight className="ml-2" />
          </a>
        </button>
      </div>
      <div className="ml-6">
        {/* Enlarge the image by adjusting the width and height */}
        <Image src={companyLogo} className='rounded-full' alt="Company Logo" width={350} height={350} />
      </div>
    </section>
  );
};

export default Hero;
