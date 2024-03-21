import React from 'react';
import Image from 'next/image';
import constructionImage from '../public/construction.jpg'; 

const About = () => {
  return (
    <section id='about' className="flex flex-col-reverse md:flex-row items-center w-screen md:h-screen p-12 ">
      <div className="flex-shrink-0 md:mr-8 mb-4 md:mb-0">
        <Image className='md:rounded-2xl rounded-full' src={constructionImage} alt="Construction" width={300} height={200} />
      </div>

      <div className="text-center md:text-left">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">ABOUT US</h2>
        <p className="text-lg md:text-2xl">
        ASPC is dedicated to delivering exceptional quality by meticulously selecting materials and ensuring the utmost excellence in our work. Our commitment to reliability and trust is bolstered by our experienced management team, ensuring complete customer satisfaction. Our project management approach is fueled by passion, strengthening our relationships with clients and contractors alike. Beyond material selection and work quality, we prioritize seamless execution, timely delivery, and cost-efficiency. Through collaboration and transparent communication, we aim to exceed customer expectations, building lasting partnerships and ensuring the success of every project.
        </p>
      </div>
    </section>
  );
};

export default About;
