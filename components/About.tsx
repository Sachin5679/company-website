import React from 'react';
import Image from 'next/image';
import constructionImage from '../public/construction.jpg'; 

const About = () => {
  return (
    <section className="flex items-center h-screen p-10 bg-gray-200">
      <div className="flex-shrink-0 mr-8">
        <Image className='rounded-2xl' src={constructionImage} alt="Construction" width={300} height={200} />
      </div>

      
      <div>
        <h2 className="text-6xl font-bold mb-4">ABOUT US</h2>
        <p className="text-2xl">
        ASPC Contractors is not just a construction firm; we're architects of possibility. With an unwavering commitment to precision and a passion for quality, we specialize in turning your ideas into enduring realities. Our experienced team brings innovative solutions to every project, crafting spaces that inspire and withstand the test of time. From concept to completion, we're dedicated to bringing your vision to life. At ASPC Contractors, we go beyond traditional building, creating environments that reflect our commitment to excellence and visionary construction.
        </p>
      </div>
    </section>
  );
};

export default About;
