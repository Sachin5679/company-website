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
          ASPC prime values for the it’s preeminent QUALITY in selecting material
          and eminence of the agreed work at its best, supporting by veteran
          managerial rooting enabling RELIABILITY and TRUST for our
          CUSTOMER SATISFACTION. Our Project Management team supports with a deal of passion to the
          agreed projects strengthening the bind with our client or contractor
          satisfaction. ASPC's commitment to excellence extends beyond material selection and work quality. Our unwavering dedication to effective project management ensures seamless execution, timely delivery, and cost-efficiency. By fostering a collaborative environment and emphasizing open communication, we prioritize the success of each project, building lasting partnerships and exceeding customer expectations.
        </p>
      </div>
    </section>
  );
};

export default About;
