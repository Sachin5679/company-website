import React from 'react';
import Image from 'next/image';
import constructionImage from '../public/construction.jpg'; 

const About = () => {
  return (
    <section id='about' className="flex flex-col-reverse md:flex-row items-center h-screen p-12 ">
      <div className="flex-shrink-0 md:mr-8 mb-4 md:mb-0">
        <Image className='rounded-2xl' src={constructionImage} alt="Construction" width={300} height={200} />
      </div>

      <div className="text-center md:text-left">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">ABOUT US</h2>
        <p className="text-lg md:text-2xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

        </p>
      </div>
    </section>
  );
};

export default About;
